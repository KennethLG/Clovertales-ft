import { Card } from "@/components/global/Card/Card";
import { config } from "@/config";
import { Post } from "@/domain/post";

const fetchPosts = async () => {
  const response = await fetch(`${config.aws.api}/post`);
  const posts = await response.json();
  return posts as Post[];
};

export const PostsList = async () => {
  const posts = await fetchPosts();

  return (
    <>
      {posts.map((post, i) => (
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
