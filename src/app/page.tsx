"use client";

import styles from "./page.module.css";
import Image, { ImageLoader } from "next/image";
import { config } from "@/config";
import { resources } from "@/config/resources";

export default function Home() {
  const imageLoader: ImageLoader = ({ src, width, quality }) => {
    console.log("loader", src);
    return resources.home.banner;
  };

  return (
    <main className={styles.main}>
      <Image
        src="home.png"
        alt="Picture of the author"
        loader={imageLoader}
        className="h-auto w-full"
        width={500}
        height={500}
      />

      {/* a full width and auto height nextjs image  */}
    </main>
  );
}
