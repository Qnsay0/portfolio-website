import DownloadeBtn from "../ui/buttons/DownloadeBtn";

export default function Navbar() {
  return (
    <div className="flex px-[2em] py-[1.5em] w-full z-0 bg-black justify-between">
      <div className=" tracking-[-0.02em]">
        <a href="#" className="text-white cursor-pointer">
          Frontend Developer
        </a>
      </div>
      <DownloadeBtn />
    </div>
  );
}
