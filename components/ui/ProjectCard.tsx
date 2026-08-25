import { FaRocket } from "react-icons/fa";
export default function ProjectCard() {
  return (
    <div className="flex flex-col p-8 gap-3 bg-neutral-200/50 rounded-4xl border-1 border-neutral-500/10">
      <div className="flex flex-row gap-5 flex-1 0 items-center">
        <FaRocket className="text-blue-600" />
        <p className="px-3 py-1 bg-neutral-200/50 rounded-4xl text-sm tracking-tight font-semibold">
          Getting started
        </p>
      </div>
      <div className="">
        <h1 className="text-lg font-semibold text-neutral-900">
          Getting Started Guide
        </h1>
        <p className="text-sm">
          Quick introduction the problem and core concepts.
        </p>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-row gap-1 text-sm tracking-tight text-white">
          <p className="px-3 py-0.5 bg-black rounded-3xl">NextJs</p>
          <p className="px-2 py-0.5 bg-black rounded-3xl">NestJS</p>
          <p className="px-2 py-0.5 bg-black rounded-3xl">TailwindCSS</p>
        </div>
      </div>
      <div className="flex flex-row justify-end gap-5 items-center">
        <span className="text-sm">2 dayes ago</span>
        <span>I</span>
      </div>
    </div>
  );
}
