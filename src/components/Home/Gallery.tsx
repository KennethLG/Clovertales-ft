import { gallery } from "@/mocks/gallery";
import Image from "next/image";

export const Gallery = () => {
  return (
    <div className="flex flex-wrap">
      {gallery.map((item) => (
        <div key={item.imageUrl} className="w-3/6 p-2">
          <Image
            alt={"Videogame image"}
            src={item.imageUrl}
            width={300}
            height={200}
            className="w-full rounded"
          />
        </div>
      ))}
    </div>
  );
};
