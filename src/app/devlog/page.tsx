import { DevlogList } from "@/components/Devlog/DevlogList";
import { DevlogCard } from "@/components/global/Card/DevlogCard";
import Link from "next/link";

const trelloBoardLink = "https://trello.com/b/1nvmoL4W/searching-light";

export default function Devlog() {
  return (
    <section className="mb-20">
      <h1 className="text-5xl text-center my-5">Devlog</h1>
      <h2 className="text-2xl text-center">
        Behind the Scenes: Our Development Journey
      </h2>
      <p className="my-10 text-center">
        Delve into the heart of <strong>Searching Light</strong> development!
        Here, we share our journey, updates, and a real-time peek into our
        progress with our public Trello board.
      </p>
      <DevlogList CardComponent={DevlogCard} limit="10" withControls />
      <Link href={trelloBoardLink} target="_blank">
        <div className="my-5 border-2 border-fuchsia-300 rounded-md p-5 bg-fuchsia-100/10 hover:bg-fuchsia-100/20 transition delay-75 duration-100">
          <h3 className="text-2xl text-center">Our Public Trello Board</h3>
          <p className="text-center my-5">
            For those who love a deep dive, our Trello board offers an
            unfiltered look at our workflow. Track our progress, discover
            upcoming features, and get a sense of how we bring{" "}
            <strong>Searching Light</strong> to life, step by step.
          </p>

          <h2 className="text-xl text-center font-bold cursor-pointer text-fuchsia-300 hover:text-fuchsia-500 transition delay-75 duration-100">
            Explore Our Trello Board
          </h2>
        </div>
      </Link>
    </section>
  );
}
