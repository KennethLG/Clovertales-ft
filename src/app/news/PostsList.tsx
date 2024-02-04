"use client";

import { ImageCard } from "@/components/global/Card/ImageCard";
import LoadingCard from "@/components/global/Loaders/LoadingCard";
import { config } from "@/config";
import { Post } from "@/domain/post";
import useApiRequest from "@/hooks/useApiRequest";
import { useEffect, useState } from "react";

type PostResponse = {
  items: Post[];
  lastEvaluatedKey?: string;
};

const sortPostsByDate = (posts: Post[]) => {
  return posts.sort(
    (a, b) => new Date(a.createdAt).getDate() - new Date(b.createdAt).getDate()
  );
};

export const PostsList = () => {
  const [lastEvaluatedKey, setLastEvaluatedKey] = useState<string>("");
  const { data, error } = useApiRequest<PostResponse>({
    url: `${config.aws.api}/post?${new URLSearchParams({
      limit: "10",
      startKey: lastEvaluatedKey || "",
    }).toString()}`,
    init: {
      next: {
        revalidate: config.time.hour,
      },
    },
  });

  useEffect(() => {
    if (data && !error) {
      setLastEvaluatedKey(data.lastEvaluatedKey || "");
    }
  }, [data, error]);

  if (error) {
    return <h1>Could not load the posts</h1>;
  }

  if (!data) {
    return (
      <>
        {[...Array(3).keys()].map((i) => (
          <LoadingCard key={i} />
        ))}
      </>
    );
  }

  const sortedPosts = sortPostsByDate(data.items);

  return (
    <>
      {sortedPosts.map((post, i) => (
        <ImageCard
          key={i}
          title={post.title}
          description={post.description}
          imageUrl={post.imageUrl}
          date={post.createdAt}
          reverse={i % 2 === 0}
          url={`/news/${post.id}`}
        />
      ))}
    </>
  );
};
