import { hero } from "@/lib/data";
export default function Menu() {
    return (
      <div className="sticky top-0 w-full text-left border-slate-100 border-b-2 min-h-full py-6 px-12 shadow-md bg-white z-40 items-center ">  
        <h1 className="text-xl font-bold">{hero.name}</h1>
  
      </div>
    );
  }