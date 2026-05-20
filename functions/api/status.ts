import { json } from "../lib/http";
export const onRequestGet: PagesFunction = async () => json({ok:true,role:"apply_intake_only",truth_warning:"INTAKE_ONLY_NOT_TRUTH",queue_states:["new","review","accepted","rejected","deferred","spam","quarantined"]});
