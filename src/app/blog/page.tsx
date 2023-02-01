import { config } from "@/config";
import Image from "next/image";
import { posts } from "@/mocks/post";
import { Card } from "@/components/global/Card/Card";

const Blog = () => {
  return (
    <section className="w-11/12 md:max-w-3xl m-auto mt-32">
      <h1 className="text-5xl my-4 text-center">Blog</h1>
      <Image
        src={`${config.aws.cdn}/snowBg-small.png`}
        alt="Searching Light snow background"
        width={200}
        height={200}
        loading="lazy"
        className="h-auto w-full md:w-4/5 m-auto rounded-2xl"
      />

      <p className="mt-10 text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.
      </p>

      {posts.map((post, i) => (
        <Card
          key={post.title}
          title={post.title}
          description={post.description}
          imageUrl={post.imageUrl}
          reverse={i % 2 === 0}
        />
      ))}
    </section>
  );
};

export default Blog;
