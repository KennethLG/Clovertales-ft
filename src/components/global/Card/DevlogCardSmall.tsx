"use client";

import { Image } from '../Image/Image';
import { formatDate } from "@/utils/date";
import { truncateText } from "@/utils/text";
import { useState } from 'react';
import { Task } from '@/domain/task';

const maxTitleLength = 30;
const maxDescriptionLength = 30;

export const DevlogCardSmall = ({
  title,
  description,
  status,
  attachments,
  createdAt
}: Task) => {
  
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="block p-3 bg-stone-900 shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300 my-3">
      <div className="flex items-start justify-between">
        <h5 className="text-sm leading-5">{truncateText(title, maxTitleLength)}</h5>
      </div>
      <p className="text-gray-400 text-xs mt-1">
        {description && (isExpanded ? description : truncateText(description, maxDescriptionLength))}
        {description && description.length > maxDescriptionLength && (
          <button onClick={() => setIsExpanded(!isExpanded)} className="text-purple-600 text-xs ml-2">
            {isExpanded ? 'Less' : 'More'}
          </button>
        )}
      </p>
      <div className="flex flex-col h-auto mt-1 space-x-2">
        {attachments && attachments.slice(0, 3).map((attachment, index) => (
          <div key={index} className="w-10 relative">
            <Image
              src={attachment.url}
              alt={`Attachment ${index + 1}`}
              width={500}
              height={500}
              className="rounded-md"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center mt-4">
        <span className="text-xs text-gray-400">{formatDate(createdAt)}</span>
        {/* <div className="flex space-x-2">
          <span className="bg-gray-200 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded">
            Feature
          </span>
        </div> */}
      </div>
    </div>
  );
};
