import assert from "node:assert/strict";
import fs from "node:fs";

const mustExist = [
"README.md","docs/APPLY_TERMINAL_INTAKE_CONTROL_PLANE.md","docs/CLOUDFLARE_DEPLOYMENT.md","surface.host.json","wrangler.toml",
"public/index.html","public/task/index.html","public/submit/index.html","public/confirm/index.html","public/status/index.html","public/privacy/index.html","public/admin/index.html",
"public/assets/apply.css","public/assets/apply-submit.js","public/assets/apply-admin.js",
"functions/api/submit.ts","functions/api/confirm.ts","functions/api/status.ts","functions/api/admin/submissions.ts","functions/api/admin/submission/[id].ts",
"functions/lib/validation.ts","functions/lib/scoring.ts","functions/lib/rate-limit.ts","functions/lib/receipt.ts",
"migrations/0001_terminal_intake_control_plane.sql","schemas/submission.schema.json","schemas/score.schema.json","schemas/queue-state.schema.json","schemas/receipt.schema.json",".github/workflows/pages.yml"
];
for (const f of mustExist) assert.ok(fs.existsSync(f), `missing ${f}`);

const taskFiles = fs.readdirSync("tasks").filter(f=>f.endsWith(".json")).sort();
assert.deepEqual(taskFiles, ["documentation-systems.json","enterprise-compliance.json","protocol-review.json","security-adversarial-review.json","surface-frontend.json","verifier-engineering.json"]);

const schema = JSON.parse(fs.readFileSync("schemas/submission.schema.json", "utf8"));
assert.equal(schema.properties.track.enum.length, 6);
assert.equal(schema.properties.constraints.properties.unpaid_ack.const, true);

const submitHtml = fs.readFileSync("public/submit/index.html", "utf8");
for (const token of ['name="artifact_link"', 'name="work_links"', 'name="unpaid_ack"', 'data-endpoint="/api/submit"']) assert.ok(submitHtml.includes(token), token);

const submitJs = fs.readFileSync("public/assets/apply-submit.js", "utf8");
for (const token of ["missing_artifact","missing_work_links","bot_trap","output_first_ack"]) assert.ok(submitJs.includes(token), token);

const scoring = fs.readFileSync("functions/lib/scoring.ts", "utf8");
for (const token of ["0.5 * output_presence","0.2 * link_quality","0.2 * alignment","0.1 * clarity"]) assert.ok(scoring.includes(token), token);

const submitFn = fs.readFileSync("functions/api/submit.ts", "utf8");
for (const token of ["validateSubmission","scoreSubmission","checkRateLimit","makeReceipt","APPLY_WEBHOOK_URL","blocked_attempts"]) assert.ok(submitFn.includes(token), token);

const adminFn = fs.readFileSync("functions/api/admin/submissions.ts", "utf8");
for (const token of ["assertAdmin","review_decisions","submission_events"]) assert.ok(adminFn.includes(token), token);

const root = fs.readFileSync("public/index.html", "utf8");
for (const token of ["Terminal intake control plane","does not publish proof","verify truth","recognize terminal truth","assign recourse"]) assert.ok(root.includes(token), token);

const status = fs.readFileSync("functions/api/status.ts", "utf8");
assert.ok(status.includes("apply_intake_only"));
assert.ok(status.includes("INTAKE_ONLY_NOT_TRUTH"));

const host = JSON.parse(fs.readFileSync("surface.host.json", "utf8"));
assert.equal(host.host, "[https://apply.verifrax.net](https://apply.verifrax.net)");
assert.equal(host.role, "apply");
assert.equal(host.deployMode, "cloudflare-pages-functions-d1");

console.log("APPLY_TERMINAL_CONTRACT_OK=true");
