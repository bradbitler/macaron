'use client'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";


import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function Quote() {
	return (
		<div className="z-0">
			<div className="px-6 mt-12 mb-6 ml-6 ">
				<h1 className="lg:leading-tighter text-xl font-bold tracking-tighter sm:text-xl md:text-xl xl:text-5xl 2xl:text-4xl ">
					About
				</h1>
			</div>
			<div className="px-6">
				<Carousel>
					<CarouselContent>
						<CarouselItem className="basis-1/2 md:basis-1/2 lg:basis-1/3 ">
							<div className="rounded-3xl flex py-12 bg-black">
								<div className="flex flex-col justify-end p-6 text-white max-w-2xl">
									<div className="text-zinc-400 font-bold pb-3">Leadership</div>
									<h1 className="lg:leading-tighter text-xl font-bold tracking-tighter sm:text-xl md:text-xl xl:text-5xl 2xl:text-4xl">
										I am passionate about design and technology, as well as the
										people behind them.
									</h1>
								</div>
							</div>
						</CarouselItem>
						<CarouselItem className="basis-1/2 md:basis-1/2 lg:basis-1/3 ">
							<div className="rounded-3xl flex py-12 bg-black">
								<div className="flex flex-col justify-end p-6 text-white max-w-2xl">
									<div className="text-zinc-400 font-bold pb-3">
										Eric Avar / Creative Director / Nike
									</div>
									<h1 className="lg:leading-tighter text-xl font-bold tracking-tighter sm:text-xl md:text-xl xl:text-5xl 2xl:text-4xl">
										&quot;Good design is finding the right balance between science +
										art.&quot;
									</h1>
								</div>
							</div>
						</CarouselItem>
						<CarouselItem className="basis-1/2 md:basis-1/2 lg:basis-1/3 ">
							<div className="rounded-3xl flex py-12 bg-black ">
								<div className="flex flex-col justify-end p-6 text-white max-w-2xl">
									<div className="text-zinc-400 font-bold pb-3">Leadership</div>
									<h1 className="lg:leading-tighter text-xl font-bold tracking-tighter sm:text-xl md:text-xl xl:text-5xl 2xl:text-4xl">
										Support others and put your team above yourself.
									</h1>
								</div>
							</div>
						</CarouselItem>
						<CarouselItem className="basis-1/2 md:basis-1/2 lg:basis-1/3 ">
							<div className="rounded-3xl flex py-12 bg-black ">
								<div className="flex flex-col justify-end p-6 text-white max-w-2xl">
									<div className="text-zinc-400 font-bold pb-3">Leadership</div>
									<h1 className="lg:leading-tighter text-xl font-bold tracking-tighter sm:text-xl md:text-xl xl:text-5xl 2xl:text-4xl">
										I am passionate about design and technology, as well as the
										people behind them.sss
									</h1>
								</div>
							</div>
						</CarouselItem>
					</CarouselContent>
				</Carousel>
			</div>
		</div>
	);
}
