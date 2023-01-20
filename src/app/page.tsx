"use client";

import styles from "./page.module.css";
import Image from "next/image";
import { config } from "@/config";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="relative">
        <Image
          src={`${config.aws.cdn}/home/banner.png`}
          alt="SearchingLight banner"
          className="h-auto w-full"
          width={500}
          height={500}
        />

        <Image
          src={`${config.aws.cdn}/home/white-logo.png`}
          alt="SearchingLight banner"
          className="h-auto w-3/5 absolute top-0 left-0 right-0 bottom-0 m-auto drop-shadow-2xl"
          width={500}
          height={500}
        />
      </div>
    </main>
  );
}
