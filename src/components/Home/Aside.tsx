"use client";

import { FeaturedCard } from "@/components/global/Card/FeaturedCard";
import { PostsList } from "../../app/news/PostsList";

export const Aside = () => {
  return (
    <aside className="w-3/10 sticky top-0 h-auto">
      <h2 className="text-xl text-center mb-5">Latest news</h2>
      <PostsList limit="3" CardComponent={FeaturedCard} />
    </aside>
  );
};
