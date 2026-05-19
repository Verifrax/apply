export function json(body: unknown, status = 200): Response { return new Response(JSON.stringify(body,null,2), { status, headers: { "content-type": "application/json; charset=utf-8" } }); }
export function fail(error: string, status = 400): Response { return json({ok:false,error},status); }
