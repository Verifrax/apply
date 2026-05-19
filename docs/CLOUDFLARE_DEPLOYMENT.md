# APPLY Cloudflare Deployment

```bash
wrangler d1 create verifrax-apply
wrangler d1 migrations apply verifrax-apply
wrangler pages secret put ADMIN_TOKEN
wrangler pages secret put RECEIPT_HMAC_SECRET
````

Optional:

```bash
wrangler pages secret put TURNSTILE_SECRET
wrangler pages secret put APPLY_WEBHOOK_URL
```

Admin: `https://apply.verifrax.net/admin`

Queue: `/api/admin/submissions?state=new`

Record: `/api/admin/submission/:id`
