import { quotes } from "../lib/data";

  export default function Quote() {


    return (
      <div className="z-0">
        <div className="px-6 mt-12 mb-6 ml-6 ">
          <h1 className="lg:leading-tighter text-xl font-bold tracking-tighter sm:text-xl md:text-xl xl:text-5xl 2xl:text-4xl ">
            About
          </h1>
        </div>
        <div className="px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {quotes.map((quote, index) => (
            <div key={index} className="rounded-3xl flex py-12 bg-black hover:-translate-y-2 hover:shadow-lg ">
              <div className="flex flex-col justify-start p-6 text-white max-w-2xl">
                <div className="text-zinc-400 font-bold pb-3">{quote.title}</div>
                <h1 className="lg:leading-tighter text-xl font-bold tracking-tighter sm:text-xl md:text-xl xl:text-5xl 2xl:text-4xl">
                  {quote.quote}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
