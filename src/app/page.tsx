"use client";
import { Banner } from "@/components/Home/Banner";
import { Platforms } from "@/components/Home/Platforms";
import { LastPosts } from "@/components/Home/LastPosts";
import { About } from "@/components/Home/About";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <Banner />
      <About />
      <div className="p-5 flex justify-center">
        <iframe
          className="max-w-5xl w-full"
          height={400}
          src="https://www.youtube.com/embed/UAO2urG23S4"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      <Platforms />
      <LastPosts />
    </main>
  );
}
