import { json, fail } from "../lib/http";
interface Env { APPLY_DB: D1Database; }
export const onRequestGet: PagesFunction<Env> = async ({ request, env }) => { const id=new URL(request.url).searchParams.get("id"); if(!id)return fail("missing_id",400); const row:any=await env.APPLY_DB.prepare("select receipt_json from submissions where id = ?").bind(id).first(); if(!row)return fail("not_found",404); return json({ok:true,receipt:JSON.parse(row.receipt_json)}); };
