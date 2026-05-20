import { json, fail } from "../lib/http";
import { validateSubmission } from "../lib/validation";
import { scoreSubmission } from "../lib/scoring";
import { checkRateLimit } from "../lib/rate-limit";
import { sha256 } from "../lib/hash";
import { makeReceipt } from "../lib/receipt";
import { notify } from "../lib/notify";
interface Env { APPLY_DB: D1Database; RECEIPT_HMAC_SECRET?: string; TURNSTILE_SECRET?: string; APPLY_WEBHOOK_URL?: string; }
async function logBlocked(env:Env,reason:string,ipHash:string,userAgentHash:string,payload:unknown){await env.APPLY_DB.prepare("insert into blocked_attempts (id, created_at, reason, ip_hash, user_agent_hash, payload_json) values (?, ?, ?, ?, ?, ?)").bind(crypto.randomUUID(),new Date().toISOString(),reason,ipHash,userAgentHash,JSON.stringify(payload).slice(0,4000)).run();}
export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
const ip=request.headers.get("cf-connecting-ip")||"unknown";
const userAgentHash=await sha256(request.headers.get("user-agent")||"unknown");
const rate=await checkRateLimit(env,ip,5);
let input:any; try{input=await request.json()}catch{await logBlocked(env,"invalid_json",rate.ipHash,userAgentHash,{});return fail("invalid_json")}
const rejection=validateSubmission(input); if(rejection){await logBlocked(env,rejection,rate.ipHash,userAgentHash,input);return json({ok:false,rejection},400)}
const id=crypto.randomUUID(), now=new Date().toISOString(), score=scoreSubmission(input), state=score.threshold==="reject"?"rejected":"new";
const receipt=await makeReceipt({id,created_at:now,track:input.track,state,secret:env.RECEIPT_HMAC_SECRET});
await env.APPLY_DB.prepare(`insert into submissions (id, schema_version, created_at, updated_at, state, track, email, github_url, artifact_url, score_total, score_json, receipt_json, submission_json, ip_hash, user_agent_hash) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`).bind(id,"1.0.0",now,now,state,input.track,input.identity?.email||"",input.links?.github||"",input.signal.artifact_link,score.total,JSON.stringify(score),JSON.stringify(receipt),JSON.stringify(input),rate.ipHash,userAgentHash).run();
await env.APPLY_DB.prepare(`insert into submission_events (id, submission_id, created_at, from_state, to_state, actor, reason) values (?, ?, ?, ?, ?, ?, ?)`).bind(crypto.randomUUID(),id,now,null,state,"system",score.threshold).run();
await notify(env.APPLY_WEBHOOK_URL,{type:"apply.submission.created",id,track:input.track,state,score});
return json({ok:true,id,state,score,receipt});
};
