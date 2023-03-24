"use client";

import useImagePopup from "@/hooks/useImagePopup";
import { formatDate } from "@/utils/date";
import classNames from "classnames";
import { useRouter } from "next/navigation";
import { Image } from "../Image/Image";
import { ImagePopup } from "../Image/ImagePopup";
import LinkLayout from "./LinkLayout";

type CardProps = {
  title: string;
  description: string;
  imageUrl: string;
  date?: string;
  reverse?: boolean;
  url?: string;
};

export const Card = ({
  title,
  description,
  imageUrl,
  date,
  reverse = false,
  url,
}: CardProps) => {
  const { closePopup, openPopup, popupImage } = useImagePopup();
  const { push } = useRouter();

  const handleImageClick = () => {
    if (url) {
      return push(url);
    }
    openPopup(imageUrl, `${title} image`);
  }

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
        onClick={handleImageClick}
      />
      <LinkLayout>
        <h1 className="text-2xl">{title.toUpperCase()}</h1>
        <p className="text-xs text-justify">{description}</p>
        {date && <h3 className="text-xl py-3">{formatDate(date)}</h3>}
      </LinkLayout>
      <ImagePopup
        src={popupImage?.src}
        alt={popupImage?.alt}
        onClose={closePopup}
        isOpen={popupImage !== null}
      />
    </div>
  );
};
