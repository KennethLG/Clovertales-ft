"use client"

import { Card } from "@/components/global/Card/Card";
import { config } from "@/config";
import { Post } from "@/domain/post";
import useApiRequest from "@/hooks/useResponse";
import Loading from "./loading";

export const PostsList = () => {
  const { data, error } = useApiRequest<Post[]>({
    url: `${config.aws.api}/post`,
  });

  if (error) {
    return <h1>Could not load the posts</h1>
  }

  if (!data) {
    return <Loading />
  }

  return (
    <>
      {data.map((post, i) => (
        <Card
          key={i}
          title={post.title}
          description={post.description}
          imageUrl={post.imageUrl}
          reverse={i % 2 === 0}
        />
      ))}
    </>
  );
};
