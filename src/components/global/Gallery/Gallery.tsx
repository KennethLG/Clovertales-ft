"use client"

import { Card } from "@/domain/card";
import { useState } from "react";
import { Image } from "../Image/Image";
import { ImagePopup } from "../Image/ImagePopup";

interface GalleryProps {
  images: Card[];
}

export const Gallery = ({ images }: GalleryProps) => {
  const [popupImage, setPopupImage] = useState<{src: string, alt: string} | null>(null);

  const openPopup = (src: string, alt: string) => {
    setPopupImage({ src, alt });
  };

  const closePopup = () => {
    setPopupImage(null);
  };
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
            onClick={() => openPopup(image.imageUrl, `Gallery Image ${i}`)}
          />
        </div>
      ))}
      {popupImage && (
        <ImagePopup
          src={popupImage.src}
          alt={popupImage.alt}
          onClose={closePopup}
        />
      )}
    </div>
  );
};
