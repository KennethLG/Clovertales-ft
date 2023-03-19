import { Card } from "@/domain/card";
import { Image } from "../Image/Image";

interface GalleryProps {
  images: Card[];
}

export const Gallery = ({ images }: GalleryProps) => {
  return (
    <div className="flex flex-wrap my-5">
      {images.map((image, i) => (
        <div key={i} className="w-2/6 p-2">
          <Image
            alt={`Searching Light image-${i}`}
            src={image.imageUrl}
            width={300}
            height={200}
            className="w-full rounded-lg cursor-pointer transform hover:-translate-y-2 transition duration-300"
          />
        </div>
      ))}
    </div>
  );
};
