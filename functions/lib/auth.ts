export interface AdminEnv { ADMIN_TOKEN: string; }
export function assertAdmin(request: Request, env: AdminEnv): boolean { const h=request.headers.get("authorization")||""; return Boolean(env.ADMIN_TOKEN) && h === `Bearer ${env.ADMIN_TOKEN}`; }
