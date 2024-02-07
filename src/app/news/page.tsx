"use client";

import { Image } from "@/components/global/Image/Image";
import { config } from "@/config";
import { PostsList } from "./PostsList";
import { ImageCard } from "@/components/global/Card/ImageCard";

export default function Layout() {
  return (
    <section>
      <h1 className="text-5xl text-center">Updates and News</h1>
      <Image
        src={`${config.aws.cdn}/snowBg-small.png`}
        alt="Searching Light snow background"
        width={200}
        height={200}
        loading="lazy"
        className="h-auto w-full mt-4 md:w-4/5 m-auto rounded-2xl"
      />

      <p className="mt-10 text-center">
        Stay informed about the latest developments in the game&apos;s
        development, news about the plot, and exclusive previews that will leave
        you wanting more.
      </p>

      <PostsList CardComponent={ImageCard} limit="2" withControls />
    </section>
  );
}
