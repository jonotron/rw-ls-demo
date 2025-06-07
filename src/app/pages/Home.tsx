import type { RequestInfo } from "rwsdk/worker"
import { DemoLiveStore } from "@/app/providers/DemoLiveStore"
import { Header } from "@/app/components/Header"
import { MainSection } from "@/app/components/MainSection"

export function Home({ ctx }: RequestInfo) {
	return (
		<DemoLiveStore>
			<Header />
			<MainSection />
		</DemoLiveStore>
	)
}
