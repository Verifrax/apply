import { json, fail } from "../../../lib/http";
import { assertAdmin } from "../../../lib/auth";
interface Env { APPLY_DB: D1Database; ADMIN_TOKEN: string; }
export const onRequestGet: PagesFunction<Env> = async ({request,env,params})=>{if(!assertAdmin(request,env))return fail("unauthorized",401);const id=Array.isArray(params.id)?params.id[0]:params.id;const row:any=await env.APPLY_DB.prepare("select * from submissions where id = ?").bind(id).first();if(!row)return fail("not_found",404);return json({ok:true,submission:{...row,score:JSON.parse(row.score_json),receipt:JSON.parse(row.receipt_json),submission:JSON.parse(row.submission_json)}})};
