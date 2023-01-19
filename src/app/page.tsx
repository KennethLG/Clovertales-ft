import styles from "./page.module.css";
import Image from "next/image";
import SLBanner from "../../public/home/home.png";

export default function Home() {
  return (
    <main className={styles.main}>
      <Image className="w-full" src={SLBanner} alt={"SearchingLight banner"} />
    </main>
  );
}
