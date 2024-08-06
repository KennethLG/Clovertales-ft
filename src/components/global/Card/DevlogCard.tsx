"use client";

import { Image } from "../Image/Image";

import { formatDate } from "@/utils/date";
import { truncateText } from "@/utils/text";
import { useState } from "react";
import { Task } from "@/domain/task";
import useImagePopup from "@/hooks/useImagePopup";
import { ImagePopup } from "../Image/ImagePopup";

const descriptionMaxLen = 50;

const statusColors = {
  completed: "bg-green-500",
  inProgress: "bg-yellow-500",
  blocked: "bg-red-500",
};

export const DevlogCard = ({
  title,
  description,
  status,
  attachments,
  createdAt,
  level,
  timing,
  type,
}: Task) => {
  const { closePopup, openPopup, popupImage } = useImagePopup();

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="block p-6 bg-gray-800 shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300 my-5">
      <div className="flex items-start justify-between mb-4">
        <h5 className="text-xl font-semibold text-white">{title}</h5>
        <span
          className={`h-4 w-4 rounded-full ${statusColors[status]} inline-block`}
        ></span>
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {level && (
          <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-xs font-medium px-3 py-1 rounded-full shadow-sm">
            Level: {level}
          </span>
        )}
        {type && (
          <span className="bg-gradient-to-r from-green-500 to-teal-500 text-white text-xs font-medium px-3 py-1 rounded-full shadow-sm">
            Type: {type}
          </span>
        )}
        {timing && (
          <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-medium px-3 py-1 rounded-full shadow-sm">
            Timing: {timing}
          </span>
        )}
      </div>
      <p className="text-gray-400 text-sm mb-4">
        {description &&
          (isExpanded
            ? description
            : truncateText(description, descriptionMaxLen))}
        {description && description.length > descriptionMaxLen && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-500 text-xs ml-2"
          >
            {isExpanded ? "Less" : "More"}
          </button>
        )}
      </p>
      {attachments && attachments.length !== 0 && (
        <div className="mb-4">
          <h6 className="text-base font-medium text-gray-300 mb-2">
            Attachments:
          </h6>
          <div className="flex flex-wrap gap-2">
            {attachments.map((attachment, index) => (
              <div key={index} className="w-20 h-20 relative">
                <Image
                  src={attachment.url}
                  alt={`Attachment ${index + 1}`}
                  width={80}
                  height={80}
                  className="rounded-md cursor-pointer object-cover w-full h-full"
                  onClick={() =>
                    openPopup(attachment.url, `Attachment ${index + 1}`)
                  }
                />
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="flex justify-between items-center">
        <span className="text-xs text-gray-500">{formatDate(createdAt)}</span>
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
