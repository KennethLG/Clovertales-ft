"use client";

import { FeaturedCard } from "@/components/global/Card/FeaturedCard";
import { PostsList } from "../../app/news/PostsList";
import "./Aside.styles.css";
import Link from "next/link";

export const Aside = () => {
  return (
    <aside className="w-3/10 sticky top-0 h-auto">
      <Link href={"/news"}>
        <h2 className="text-xl text-center font-bold cursor-pointer hover:text-fuchsia-500 transition delay-75 duration-100">
          Latest news
        </h2>
      </Link>

      <PostsList limit="3" CardComponent={FeaturedCard} />
      <Link href={"/news"}>
        <h2 className="text-xl text-center font-bold cursor-pointer hover:text-fuchsia-500 transition delay-75 duration-100">
          Learn more!
        </h2>
      </Link>
    </aside>
  );
};
