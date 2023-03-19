"use client"

import useImagePopup from "@/hooks/useImagePopup";
import classNames from "classnames";
import { Image } from "../Image/Image";
import { ImagePopup } from "../Image/ImagePopup";

type CardProps = {
  title: string;
  description: string;
  imageUrl: string;
  reverse?: boolean;
};

export const Card = ({
  title,
  description,
  imageUrl,
  reverse = false,
}: CardProps) => {

  const { closePopup, openPopup, popupImage } = useImagePopup();

  return (
    <div
      className={classNames("flex items-center my-10", {
        "flex-row-reverse": reverse,
      })}
    >
      <Image
        src={imageUrl}
        alt={`${title} image`}
        width={300}
        height={200}
        onClick={() => openPopup(imageUrl, `${title} image`)}
      />
      <div className="w-3/6 p-3">
        <h1 className="text-xl">{title.toUpperCase()}</h1>
        <p className="text-xs text-justify">{description}</p>
      </div>
      <ImagePopup
        src={popupImage?.src}
        alt={popupImage?.alt}
        onClose={closePopup}
        isOpen={popupImage !== null}
      />
    </div>
  );
};
