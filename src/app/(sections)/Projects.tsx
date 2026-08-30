import ProjectCard from "@/src/app/components/ui/ProjectCard";

export interface ProjectItem {
  href: string;
  title: string;
  technologies: string[];
}

interface ProjectsProps {
  title: string;
  subtitle: string;
  projects: ProjectItem[];
}

export default function Projects(props: ProjectsProps) {
  return (
    <div className="min-h-dvh bg-white p-[2em] flex flex-col text-black rounded-b-4xl">
      <div className="flex flex-col items-end justify-start mt-10">
        <div className="flex flex-col text-end">
          <h1 className="text-[clamp(3em,min(10vw,15vh),12em)] leading-none uppercase font-bold tracking-tighter">
            {props.title}
          </h1>
          <p className="text-[clamp(1.2em,min(6vw,8vh),3.5em)] leading-none max-w-225 font-normal tracking-tighter">
            {props.subtitle}
          </p>
        </div>
      </div>
      <div className="mt-20 flex flex-col gap-10 mb-10">
        {props.projects?.map((project, index) => (
          <ProjectCard
            key={index}
            index={index}
            href={project.href}
            title={project.title}
            technologies={project.technologies}
          />
        ))}
      </div>
    </div>
  );
}
