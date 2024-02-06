"use client";

import { FeaturedCard } from "@/components/global/Card/FeaturedCard";
import { PostsList } from "../../app/news/PostsList";

export const Aside = () => {
  return (
    <aside className="w-3/10">
      <h2>Latest news</h2>
      <PostsList limit="3" CardComponent={FeaturedCard} />
    </aside>
  );
};
