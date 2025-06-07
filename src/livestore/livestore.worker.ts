import { makeWorker } from "@livestore/adapter-web/worker"
import { makeCfSync } from "@livestore/sync-cf"
import { env } from "cloudflare:workers"
import { schema } from "./schema.js"

makeWorker({
	schema,
	sync: {
		backend: makeCfSync({ url: env.VITE_LIVESTORE_SYNC_URL }),
		initialSyncOptions: { _tag: "Blocking", timeout: 5000 },
	},
})
