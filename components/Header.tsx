import { hero } from "@/lib/data";

export default function Header() {
    
	return (
		<div className="w-screen box-border mx-auto">
			<section className="rounded-3xl flex py-12 md:py-24 lg:py-32 xl:py-48  mx-6 bg-black">
				<div className="flex flex-col justify-end p-6 text-white ">
					<h1 className="lg:leading-tighter text-xl font-bold tracking-tighter sm:text-xl md:text-xl xl:text-5xl 2xl:text-4xl">
                    {hero.title}
					</h1>
					<h1 className="lg:leading-tighter text-xl font-bold tracking-tighter sm:text-xl md:text-xl xl:text-5xl 2xl:text-4xl">
                    {hero.company}
					</h1>
				</div>
			</section>
		</div>
	);
}