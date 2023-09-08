import { config } from "@/config";
import Image from "next/image";
import { SocialList } from "./SocialList";
import Link from "next/link";

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
          <h1 className="text-lg">Clover Tales</h1>
        </div>
        <SocialList />
      </div>

      <div className="flex flex-col gap-y-1">
        <Link
          className="text-center text-base hover:text-fuchsia-400"
          href="/legal"
        >
          Terms & Conditions
        </Link>
        <div className="text-center text-base hover:text-fuchsia-400">
          <a href="mailto:contact@clovertales.com">contact@clovertales.com</a>
        </div>
        <p className="text-center text-base">
          &copy; {new Date().getFullYear()} Clover Tales
        </p>
      </div>
    </footer>
  );
};
