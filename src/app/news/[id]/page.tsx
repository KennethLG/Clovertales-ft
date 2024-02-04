"use client";

import { config } from "@/config";
import { Post as IPost } from "@/domain/post";
import useApiRequest from "@/hooks/useApiRequest";
import "./styles.css";

interface PostProps {
  params: {
    id: string;
  };
}

export default function Post({ params }: PostProps) {
  const { data, error } = useApiRequest<IPost>({
    url: `${config.aws.api}/post?id=${params.id}`,
    init: {
      next: {
        revalidate: config.time.day,
      },
    },
  });

  if (error) {
    return <h1>{error.message}</h1>;
  }

  if (!data) {
    return <h1>Loading...</h1>;
  }

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: data.content,
      }}
    />
  );
}
