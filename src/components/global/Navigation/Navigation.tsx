"use client";

import { config } from "@/config";
import Image from "next/image";
import Link from "next/link";

export const Navigation = () => {
  const tabs = [
    {
      name: "Blog",
      link: "/blog",
    },
    {
      name: "Games",
      link: "/games",
    },
    {
      name: "Team",
      link: "/team",
    },
  ];

  return (
    <div className="flex flex-row justify-evenly items-center p-2 bg-fuchsia-900/50 fixed w-full backdrop-blur-sm z-50">
      <div className="flex flex-row items-center">
        <Image
          src={`${config.aws.cdn}/icon.png`}
          width={50}
          height={50}
          className="rounded-full"
          alt="SearchingLight icon"
        />
        <div className="text-2xl font-bold ml-2">Clover Story</div>
      </div>
      <ul className="flex flex-row items-center">
        {tabs.map((tab) => (
          <li
            key={tab.name}
            className="text-lg font-bold mr-2 cursor-pointer hover:text-fuchsia-500 transition delay-75 duration-100"
          >
            <Link href={tab.link}>{tab.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
