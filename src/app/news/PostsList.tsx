"use client";

import { CardProps } from "@/components/global/Card/interfaces";
import LoadingCard from "@/components/global/Loaders/LoadingCard";
import { config } from "@/config";
import { Post } from "@/domain/post";
import useApiRequest from "@/hooks/useApiRequest";
import React, { useEffect, useState } from "react";

type PostResponse = {
  items: Post[];
  lastEvaluatedKey?: string;
};

const sortPostsByDate = (posts: Post[]) => {
  return posts.sort(
    (a, b) => new Date(a.createdAt).getDate() - new Date(b.createdAt).getDate()
  );
};

type PostsListProps = {
  limit?: string;
  CardComponent: React.FC<CardProps>;
};

export const PostsList: React.FC<PostsListProps> = ({
  limit,
  CardComponent,
}) => {
  const [lastEvaluatedKey, setLastEvaluatedKey] = useState<string>("");
  const { data, error } = useApiRequest<PostResponse>({
    url: `${config.aws.api}/post?${new URLSearchParams({
      limit: limit || "10",
      startKey: lastEvaluatedKey || "",
    }).toString()}`,
    init: {
      next: {
        revalidate: config.time.hour,
      },
    },
  });

  // useEffect(() => {
  //   if (data && !error) {
  //     setLastEvaluatedKey(data.lastEvaluatedKey || "");
  //   }
  // }, [data, error]);

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
        <CardComponent
          key={i}
          title={post.title}
          description={post.description}
          imageUrl={post.imageUrl}
          date={post.createdAt}
          url={`/news/${post.id}`}
          reverse={i % 2 === 0}
        />
      ))}
    </>
  );
};
