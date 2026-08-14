export default function Navbar() {
  return (
    <div className="flex px-[2em] py-[1.5em] w-full z-0 bg-black justify-between">
      <div className="uppercase tracking-[-0.02em]">
        <a href="#" className="text-white cursor-pointer">
          portfolio
        </a>
      </div>
      <div>
        <button className="text-white py-[5px] px-[10px] text-[0.7em] rounded-full transition-all duration-200 ease-in outline-none font-medium border border-white no-underline hover:bg-amber-400">
          Downloade CV
        </button>
      </div>
    </div>
  );
}
