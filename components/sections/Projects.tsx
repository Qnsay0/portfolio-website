import { portfolioData } from "@/data/constans";

export default function Projects() {
  return (
    <div className="relative p-[2em] flex flex-col text-white">
      <div className="flex flex-col items-end justify-start">
        <div className="flex flex-col text-end">
          <h1 className="text-[clamp(3em,10vw,12em)] leading-none uppercase font-bold tracking-tighter">
            {portfolioData.projects.title}
          </h1>
          <p className="text-[clamp(1.2em,6vw,3.5em)] leading-none max-w-225 font-normal tracking-tighter">
            {portfolioData.projects.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}
