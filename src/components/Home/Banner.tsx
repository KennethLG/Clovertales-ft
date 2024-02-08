"use client";

import { config } from "@/config";
import { usePathname } from "next/navigation";
import "./Banner.styles.css";

export const Banner = () => {
  const path = usePathname();

  if (path !== "/") {
    return <></>;
  }

  return (
    <div className="relative">
      <div
        className="main-banner"
        style={{
          backgroundImage: `url(${config.aws.cdn}/home/banner-small.jpg)`,
        }}
      ></div>
      <div
        className="w-full h-32 bottom-0 absolute bg-gradient-to-t from-black to-transparent"
        style={{}}
      />
    </div>
  );
};
