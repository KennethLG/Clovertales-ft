"use client";

import { config } from "@/config";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BurgerMenu } from "./BurgerMenu";
import "./Navigation.styles.css";

export const Navigation = () => {
  const [open, setOpen] = useState(false);

  const tabs = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Overview",
      link: "/overview",
    },
    {
      name: "News",
      link: "/news",
    },
    {
      name: "Team",
      link: "/team",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  return (
    <>
      <div className="navbar flex flex-row fixed top-0 w-full z-30 ">
        <Link href="/" className="flex flex-row items-center">
          <Image
            src={`${config.aws.cdn}/icon.png`}
            width={50}
            height={50}
            className="rounded-full w-8 h-8"
            alt="SearchingLight icon"
          />
          <div className="text-lg md:text-base font-bold ml-2">
            Clover Tales
          </div>
        </Link>
        <ul className="hidden md:flex flex-row items-center">
          {tabs.map((tab) => (
            <li
              key={tab.name}
              className="text-sm mx-3 font-bold cursor-pointer hover:text-fuchsia-500 transition delay-75 duration-100"
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
      <BurgerMenu list={tabs} open={open} setOpen={setOpen} />
    </>
  );
};
