import { Image } from "../Image/Image";

interface GalleryProps {
  images: string[];
}

export const Gallery = ({ images }: GalleryProps) => {
  return (
    <div className="flex flex-wrap my-5">
      {images.map((image, i) => (
        <div key={i} className="w-2/6 p-1">
          <Image
            alt={`Searching Light image-${i}`}
            src={image}
            width={300}
            height={200}
            className="w-full rounded-lg"
          />
        </div>
      ))}
    </div>
  );
};
