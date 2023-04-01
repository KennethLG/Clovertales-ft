"use client"

import { Image } from "../Image/Image";
import { CardLayout } from "./CardLayout";
import useImageClickNavigation from "@/hooks/useImageClickNavigation";

type ImageCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  date?: string;
  reverse?: boolean;
  url?: string;
};

export const ImageCard = ({
  title,
  description,
  imageUrl,
  date,
  reverse,
  url,
}: ImageCardProps) => {
  const { handleImageClick } = useImageClickNavigation(
    url,
    imageUrl,
    `${title} image`
  );

  return (
    <CardLayout
      title={title}
      description={description}
      date={date}
      reverse={reverse}
      url={url}
    >
      <Image
        src={imageUrl}
        alt={`${title} image`}
        width={300}
        height={200}
        onClick={handleImageClick}
      />
    </CardLayout>
  );
};
