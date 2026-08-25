import { portfolioData } from "@/data/constans";
import ProjectCard from "../ui/ProjectCard";

export default function Projects() {
  return (
    <div className="min-h-dvh bg-white p-[2em] flex flex-col text-black rounded-b-4xl">
      <div className="flex flex-col items-end justify-start mt-10">
        <div className="flex flex-col text-end">
          <h1 className="text-[clamp(3em,10vw,12em)] leading-none uppercase font-bold tracking-tighter">
            {portfolioData.projects.title}
          </h1>
          <p className="text-[clamp(1.2em,6vw,3.5em)] leading-none max-w-225 font-normal tracking-tighter">
            {portfolioData.projects.subtitle}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap  w-full justify-center gap-5 mt-20 ">
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}
