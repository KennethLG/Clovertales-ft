"use client";

import styles from "./page.module.css";
import Image from "next/image";
import { config } from "@/config";

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        src={`${config.aws.cdn}/home/banner.png`}
        alt="Picture of the author"
        className="h-auto w-full"
        width={200}
        height={200}
      />
    </main>
  );
}
