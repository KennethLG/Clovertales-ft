"use client";

import { Image } from "../Image/Image";
import { formatDate } from "@/utils/date";
import { truncateText } from "@/utils/text";
import { useState } from "react";
import { Task } from "@/domain/task";

const maxTitleLength = 30;
const maxDescriptionLength = 30;

export const DevlogCardSmall = ({
  title,
  description,
  status,
  attachments,
  createdAt,
  level,
  type,
  timing,
}: Task) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="block p-4 bg-gray-800 shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300 my-3">
      <div className="flex items-start justify-between mb-2">
        <h5 className="text-sm font-semibold text-white">
          {truncateText(title, maxTitleLength)}
        </h5>
        <span
          className={`h-3 w-3 rounded-full ${
            status === "completed"
              ? "bg-green-500"
              : status === "inProgress"
              ? "bg-yellow-500"
              : status === "blocked"
              ? "bg-red-500"
              : ""
          } inline-block`}
        ></span>
      </div>
      <div className="flex flex-wrap gap-1 mb-2">
        {level && (
          <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-xs font-medium px-2 py-0.5 rounded-full shadow-sm">
            Level: {level}
          </span>
        )}
        {type && (
          <span className="bg-gradient-to-r from-green-500 to-teal-500 text-white text-xs font-medium px-2 py-0.5 rounded-full shadow-sm">
            Type: {type}
          </span>
        )}
        {timing && (
          <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-medium px-2 py-0.5 rounded-full shadow-sm">
            Timing: {timing}
          </span>
        )}
      </div>
      <p className="text-gray-400 text-xs mb-2">
        {description &&
          (isExpanded
            ? description
            : truncateText(description, maxDescriptionLength))}
        {description && description.length > maxDescriptionLength && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-500 text-xs ml-1"
          >
            {isExpanded ? "Less" : "More"}
          </button>
        )}
      </p>
      <div className="flex flex-wrap gap-2 mb-2">
        {attachments &&
          attachments.slice(0, 3).map((attachment, index) => (
            <div key={index} className="w-12 h-12 relative">
              <Image
                src={attachment.url}
                alt={`Attachment ${index + 1}`}
                width={48}
                height={48}
                className="rounded-md cursor-pointer object-cover w-full h-full"
              />
            </div>
          ))}
      </div>
      <div className="flex justify-between items-center">
        <span className="text-xs text-gray-500">{formatDate(createdAt)}</span>
      </div>
    </div>
  );
};
