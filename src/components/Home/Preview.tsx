import { Card } from "@/domain/card";
import Link from "next/link";
import { Gallery } from "../global/Gallery/Gallery";

interface PreviewProps {
  gallery: Card[];
}

export const Preview = ({ gallery }: PreviewProps) => {
  return (
    <>
      <Gallery images={gallery.slice(0, 3)} />
      <Link href="/overview">
        <h1 className="text-center w-40 m-auto text-2xl cursor-pointer border-b-2 border-transparent hover:border-fuchsia-500 hover:text-fuchsia-500 transition duration-300">
          Learn more
        </h1>
      </Link>
    </>
  );
};
