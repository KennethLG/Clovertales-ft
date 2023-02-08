import { config } from "@/config";
import { gallery } from "@/mocks/gallery";
import Image from "next/image";

export const Gallery = () => {
  const galleryLength = 10;

  return (
    <div className="flex flex-wrap">
      {gallery.map((item) => (
        <div key={item.id} className="w-3/6 p-2">
          <Image
            alt={"Videogame image"}
            src={`${config.aws.cdn}/gallery/sl${item.id}.png`}
            width={300}
            height={200}
            className="w-full rounded"
          />
        </div>
      ))}
    </div>
  );
};
