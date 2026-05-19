export async function sha256(value:string):Promise<string>{const b=new TextEncoder().encode(value);const d=await crypto.subtle.digest("SHA-256",b);return [...new Uint8Array(d)].map(x=>x.toString(16).padStart(2,"0")).join("")}
export async function hmacSha256(secret:string,value:string):Promise<string>{return sha256(secret+"|"+value)}
