import React, { useState, useEffect } from "react";
import { config } from "@/config";
import { Post } from "@/domain/post";
import LoadingCard from "@/components/global/Loaders/LoadingCard";
import { PaginationControls } from "./Pagination";

type PostsListProps = {
  limit: string;
  withControls?: boolean;
  CardComponent: React.FC<any>;
};

export const PostsList: React.FC<PostsListProps> = ({
  limit,
  withControls = false,
  CardComponent,
}) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastKey, setLastKey] = useState<any>(null);
  const [previousKeys, setPreviousKeys] = useState<any[]>([]);

  const fetchPosts = async (key?: any) => {
    setIsLoading(true);
    setError(null);
    let url = `${config.aws.api}/post?limit=${limit}`;
    if (key) {
      url += `&startKey[id]=${key.id}&startKey[createdAt]=${key.createdAt}`;
    }

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (!response.ok)
        throw new Error(data.message || "Failed to fetch posts");
      setPosts(data.items);
      setLastKey(data.lastEvaluatedKey);
    } catch (error: any) {
      setError(error.toString());
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handlePrevious = () => {
    const newPreviousKeys = [...previousKeys];
    newPreviousKeys.pop();
    const previousKey = newPreviousKeys[newPreviousKeys.length - 1] || null;
    setPreviousKeys(newPreviousKeys);
    fetchPosts(previousKey);
  };

  const handleNext = () => {
    if (lastKey && !previousKeys.includes(lastKey)) {
      setPreviousKeys([...previousKeys, lastKey]);
      fetchPosts(lastKey);
    }
  };

  if (error) return <div>{error}</div>;
  if (isLoading) return <LoadingCard />;

  return (
    <>
      {posts.map((post, i) => (
        <CardComponent
          key={i}
          title={post.title}
          description={post.description}
          imageUrl={post.imageUrl}
          date={post.createdAt}
          url={`/news/${post.createdAt}`}
          reverse={i % 2 === 0}
        />
      ))}
      {withControls && (
        <PaginationControls
          hasPrevious={previousKeys.length > 0}
          hasNext={!!lastKey}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
      )}
    </>
  );
};
