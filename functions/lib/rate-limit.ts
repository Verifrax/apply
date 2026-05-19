import { sha256 } from "./hash";
export interface RateLimitEnv { APPLY_DB: D1Database; }
export async function checkRateLimit(env:RateLimitEnv,ip:string,limit=5){const ipHash=await sha256(ip||"unknown");return {ok:true,ipHash};}
