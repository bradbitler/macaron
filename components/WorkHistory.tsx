import { workHistory } from "../lib/data";

export default function WorkHistory() {

    return (
        <>
            <div className="w-screen box-border mx-auto">
                <section className="rounded-3xl flex mx-6 bg-black">
                    <div className="flex flex-col w-full justify-end p-6 text-white z-10">
                        <div className="">
                            <div className="w-full sm:w-1/6">
                                <h2 className="text-xl font-bold">Work History</h2>
                            </div>
                            <div>
                                <div className="space-y-6">
                                {workHistory.map((item, index) => (
                                    <div key={index} className={`flex items-center ${index !== workHistory.length - 1 ? "border-b" : ""} py-4`}>
                                        <div className="w-full sm:w-1/6">
                                            <div className="font-bold">{item.title}</div>
                                            <div className="text-zinc-400 text-xs">{item.company}</div>
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