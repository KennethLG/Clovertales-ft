"use client"

import { Card } from "@/domain/card";
import useImagePopup from "@/hooks/useImagePopup";
import { Image } from "../Image/Image";
import { ImagePopup } from "../Image/ImagePopup";

interface GalleryProps {
  images: Card[];
}

export const Gallery = ({ images }: GalleryProps) => {
  const { popupImage, openPopup, closePopup } = useImagePopup();

  return (
    <div className="flex flex-wrap my-5">
      {images.map((image, i) => (
        <div key={i} className="w-2/6 p-2">
          <Image
            alt={`Searching Light image-${i}`}
            src={image.url}
            width={300}
            height={200}
            onClick={() => openPopup(image.url, `Gallery Image ${i}`)}
          />
        </div>
      ))}
        <ImagePopup
          src={popupImage?.src}
          alt={popupImage?.alt}
          onClose={closePopup}
          isOpen={popupImage !== null}
        />
    </div>
  );
};
