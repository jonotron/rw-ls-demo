"use client"
import { makePersistedAdapter } from "@livestore/adapter-web"
import LiveStoreSharedWorker from "@livestore/adapter-web/shared-worker?sharedworker"
import { LiveStoreProvider } from "@livestore/react"
import type React from "react"
import { unstable_batchedUpdates as batchUpdates } from "react-dom"
import type { LayoutProps } from "rwsdk/router"

import LiveStoreWorker from "@/livestore/livestore.worker?worker"
import { schema } from "@/livestore/schema.js"
import { getStoreId } from "@/app/util/store-id.js"

const storeId = getStoreId()

const adapter = makePersistedAdapter({
	storage: { type: "opfs" },
	worker: LiveStoreWorker,
	sharedWorker: LiveStoreSharedWorker,
})

export const DemoLiveStore: React.FC = ({ children }: LayoutProps) => (
	<LiveStoreProvider
		schema={schema}
		adapter={adapter}
		renderLoading={(_) => <div>Loading LiveStore ({_.stage})...</div>}
		batchUpdates={batchUpdates}
		storeId={storeId}
		syncPayload={{ authToken: "insecure-token-change-me" }}
	>
		{children}
	</LiveStoreProvider>
)
