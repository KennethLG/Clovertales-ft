"use client"

import { config } from "@/config";
import Image from "next/image";
import { usePathname } from "next/navigation";

export const Banner = () => {

  const path = usePathname();

  if (path !== "/") {
    return <></>;
  }

  return (
    <div className="relative">
      <Image
        src={`${config.aws.cdn}/home/banner-small.png`}
        alt="SearchingLight banner"
        className="h-auto w-full"
        width={1000}
        height={1000}
      />

      <Image
        src={`${config.aws.cdn}/home/white-logo.png`}
        alt="SearchingLight banner"
        className="h-auto w-3/5 absolute top-0 left-0 right-0 bottom-0 m-auto drop-shadow-2xl"
        width={1000}
        height={1000}
      />

      <div
        className="w-full h-64 bottom-0 absolute bg-gradient-to-t from-black to-transparent"
        style={{}}
      />
    </div>
  );
};
