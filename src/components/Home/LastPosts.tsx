import { Card } from "../global/Card/Card";

export const LastPosts = () => {
  const posts = [
    {
      title: "Post 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod",
      imageUrl: "https://picsum.photos/300/200",
    },
    {
      title: "Post 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      imageUrl: "https://picsum.photos/300/200",
    },
    {
      title: "Post 3",
      description: "Lorem ipsum dolor sit amet consectetur.",
      imageUrl: "https://picsum.photos/300/200",
    },
    {
      title: "Post 3",
      description: "Lorem ipsum dolor sit amet consectetur.",
      imageUrl: "https://picsum.photos/300/200",
    },
  ];

  return (
    <div className="w-11/12 m-auto text-center my-16">
      <h1 className="text-5xl my-4">Posts</h1>
      {posts.map((post, i) => (
        <Card
          key={post.title}
          title={post.title}
          description={post.description}
          imageUrl={post.imageUrl}
          reverse={i % 2 === 0}
        />
      ))}
    </div>
  );
};
