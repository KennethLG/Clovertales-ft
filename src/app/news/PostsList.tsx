"use client"

import { ImageCard } from "@/components/global/Card/ImageCard";
import LoadingCard from "@/components/global/Loaders/LoadingCard";
import { config } from "@/config";
import { Post } from "@/domain/post";
import useApiRequest from "@/hooks/useResponse";

export const PostsList = () => {
  const { data, error } = useApiRequest<Post[]>({
    url: `${config.aws.api}/post`,
    init: {
      next: {
        revalidate: config.time.hour
      }
    }
  });

  if (error) {
    return <h1>Could not load the posts</h1>
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

  return (
    <>
      {data.map((post, i) => (
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
