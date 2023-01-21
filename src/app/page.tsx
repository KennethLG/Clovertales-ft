"use client";
import Image from "next/image";
import { config } from "@/config";
import { Banner } from "@/components/Home/Banner";
import { Platforms } from "@/components/Home/Platforms";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <Banner />

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
    </main>
  );
}
