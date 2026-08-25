import DownloadeBtn from "../ui/buttons/DownloadeBtn";
import { FaGithubAlt, FaLinkedin, FaInstagram } from "react-icons/fa";
export default function Navbar() {
  return (
    <div className="relative z-1 flex px-[2em] py-[1.5em] w-full z-0 bg-black justify-between">
      <div className=" tracking-[-0.02em]">
        <h1 className="text-white">Frontend Developer</h1>
      </div>
      <DownloadeBtn />
    </div>
  );
}
