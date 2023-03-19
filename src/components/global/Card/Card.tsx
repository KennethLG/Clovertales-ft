"use client"

import classNames from "classnames";
import Image from "next/image";
import { ImagePopup } from "../Image/ImagePopup";
import { useImagePopup } from "../../../hooks/useImagePopup";

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
        className="w-3/6 rounded-md"
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
