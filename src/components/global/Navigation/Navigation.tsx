"use client";

import { config } from "@/config";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BurgerMenu } from "./BurgerMenu";

export const Navigation = () => {
  const [open, setOpen] = useState(false);

  const tabs = [
    {
      name: "Blog",
      link: "/blog",
    },
    {
      name: "Searching Light",
      link: "/searchinglight",
    },
    {
      name: "Team",
      link: "/team",
    },
  ];

  return (
    <>
      <div className="flex flex-row justify-evenly items-center p-2 bg-fuchsia-900/50 fixed w-full backdrop-blur-sm z-30">
        <div className="flex flex-row items-center">
          <Image
            src={`${config.aws.cdn}/icon.png`}
            width={50}
            height={50}
            className="rounded-full"
            alt="SearchingLight icon"
          />
          <div className="text-lg md:text-2xl font-bold ml-2">Clover Story</div>
        </div>
        <ul className="hidden md:flex flex-row items-center">
          {tabs.map((tab) => (
            <li
              key={tab.name}
              className="text-base mx-5 font-bold cursor-pointer hover:text-fuchsia-500 transition delay-75 duration-100"
            >
              <Link href={tab.link}>{tab.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <a
        className={classNames(
          "fixed md:hidden top-4 right-8 z-50 block md:hidden",
          {
            "text-black": open,
          }
        )}
        onClick={() => setOpen(!open)}
      >
        <GiHamburgerMenu
          size={32}
          className={"block md:hidden transition-all"}
          style={{
            transform: open ? "rotate(90deg)" : "rotate(0deg)",
          }}
        />
      </a>
      <BurgerMenu list={tabs} open={open} />
    </>
  );
};
