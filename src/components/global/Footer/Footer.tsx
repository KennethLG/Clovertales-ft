import { config } from "@/config";
import Image from "next/image";
import { SocialList } from "./SocialList";

export const Footer = () => {
  return (
    <footer className="bg-fuchsia-900/50 text-white py-4">
      <div className="w-4/5 m-auto flex flex-row justify-evenly">
        <div className="flex items-center gap-2">
          <Image
            src={`${config.aws.cdn}/icon.png`}
            width={50}
            height={50}
            className="rounded-full"
            alt="SearchingLight icon"
          />
          <h1 className="text-lg">Clover Story</h1>
        </div>
        <SocialList />
      </div>

      <div>
        <p className="text-center text-sm">
          &copy; {new Date().getFullYear()} Clover Story
        </p>
        <p className="text-center text-sm">
          <a href="mailto:contact@cloverstory.com">contact@cloverstory.com</a>
        </p>
      </div>
    </footer>
  );
};
