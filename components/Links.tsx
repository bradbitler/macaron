import { links } from '../lib/data';

export default function Links() {


	return (
        <>
            <div className="w-screen box-border mx-auto">
                <section className="rounded-3xl flex mx-6 bg-black">
                    <div className="flex flex-col w-full justify-end p-6 text-white z-10">
                        <div className="">
                            <div className="w-full sm:w-1/6">
                                <h2 className="text-xl font-bold">Links</h2>
                            </div>
                            <div>
							<div className="space-y-6">
								{links.map((link, index) => (
									<div key={index} className={index === links.length - 1 ? "flex items-center py-4" : "flex items-center border-b py-4"}>
										<div className="w-full sm:w-1/6 ">
											<a href={link.url} className="font-bold hover:text-purple-200">
												{link.name}
											</a>
										</div>
									</div>
								))}
							</div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}