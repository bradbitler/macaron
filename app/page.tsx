import Header from "@/components/Header";
import Menu from "@/components/Menu";
import Quote from "@/components/Quote";
import WorkHistory from "@/components/WorkHistory";
import { Metadata } from "next";
import Links from "@/components/Links";

export const metadata: Metadata = {
	title: "Brad Bitler - Product Design Lead",
	description: "Brad Bitler is a Product Design Lead at Apple Inc.",
	openGraph: {
		title: "Brad Bitler - Product Design Lead",
		description: "Your Open Graph Description",
	},
};

export default function Home() {
	return (
		<>
			<main className="flex min-h-screen flex-col items-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
				<div className="w-full items-center text-sm">
					<div className="flex flex-col items-start gap-3 pb-12 z-0">
						<Menu />
						<Header />
						<Quote />
						<WorkHistory />
						<Links />
					</div>
				</div>
			</main>
		</>
	);
}
