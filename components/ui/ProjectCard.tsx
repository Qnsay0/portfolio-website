export default function ProjectCard() {
  return (
    <div className=" flex-1/2 max-w-100   p-5 flex flex-col gap-5 border-neutral-700/50 border rounded-2xl ">
      <div className="w-full h-50 bg-gray-600 rounded-xl"></div>
      <div className="flex flex-col gap-2">
        <p className="text-2xl font-semibold">Planer - Uloz swoj plan</p>
        <p className="text-sm">
          Projekt Solvro Planer ma na celu stworzenie intuicyjnej i przyjaznej
          użytkownikowi aplikacji, która pomoże uczniom zaplanować swój
          harmonogram zajęć.
        </p>
      </div>
      <div className="flex flex-row gap-1">
        <span className="rounded-full border border-neutral-700/50 bg-neutral-800/50 px-3 py-1 text-[11px] font-semibold tracking-wider text-neutral-300 transition-colors ">
          NextJS
        </span>
        <span className="rounded-full border border-neutral-700/50 bg-neutral-800/50 px-3 py-1 text-[11px] font-semibold tracking-wider text-neutral-300 transition-colors ">
          TailwindCSS
        </span>
        <span className="rounded-full border border-neutral-700/50 bg-neutral-800/50 px-3 py-1 text-[11px] font-semibold tracking-wider text-neutral-300">
          Rest API
        </span>
        <span className="rounded-full border border-neutral-700/50 bg-neutral-800/50 px-3 py-1 text-[11px] font-semibold tracking-wider text-neutral-300 transition-colors">
          nestJS
        </span>
      </div>
    </div>
  );
}
