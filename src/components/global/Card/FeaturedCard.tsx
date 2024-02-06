"use client";

import { Image } from "../Image/Image";
import { formatDate } from "@/utils/date";
import "./FeaturedCard.styles.css";
import { truncateText } from "@/utils/text";
import LinkLayout from "./LinkLayout";
import useImageClickNavigation from "@/hooks/useImageClickNavigation";

type FeaturedCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  date?: string;
  url?: string;
};

const maxTitleLength = 30;
const maxDescriptionLength = 50;

export const FeaturedCard = ({
  title,
  description,
  imageUrl,
  date,
  url,
}: FeaturedCardProps) => {
  const { handleImageClick } = useImageClickNavigation(
    url,
    imageUrl,
    `${title} image`
  );

  return (
    <LinkLayout url={url}>
      <div className="flex items-center space-x-4 rounded-lg overflow-hidden p-4">
        <div className="flex-none w-24 h-24 relative">
          <Image
            src={imageUrl}
            alt={`${title} image`}
            width={96}
            height={96}
            className="rounded-lg"
            onClick={handleImageClick}
          />
        </div>
        <div className="flex-grow max-w-1">
          <h5 className="text-sm leading-5">
            {truncateText(title, maxTitleLength)}
          </h5>
          <p className="text-xs text-gray-400">
            {truncateText(description, maxDescriptionLength)}
          </p>
          {date && (
            <span className="text-sm text-gray-300">{formatDate(date)}</span>
          )}
        </div>
      </div>
    </LinkLayout>
  );
};
