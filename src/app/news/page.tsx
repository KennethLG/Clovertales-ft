import { config } from "@/config";
import Image from "next/image";

import { Card } from "@/components/global/Card/Card";
import { Post } from "@/domain/post";
import { Suspense } from "react";
import Loading from "./loading";

const fetchPosts = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const response = await fetch(`${config.aws.api}/post`, {
    cache: "force-cache",
  });
  const posts = await response.json();
  return posts as Post[];
};

const News = async () => {
  const posts = await fetchPosts();

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

      <Suspense fallback={<Loading />}>
        {posts.map((post, i) => (
          <Card
            key={i}
            title={post.title}
            description={post.description}
            imageUrl={post.imageUrl}
            reverse={i % 2 === 0}
          />
        ))}
      </Suspense>
    </section>
  );
};

export default News;
