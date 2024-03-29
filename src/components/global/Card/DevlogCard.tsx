"use client";

import { Image } from '../Image/Image';

import { formatDate } from "@/utils/date";
import { truncateText } from "@/utils/text";
import { useState } from 'react';
import { Task } from '@/domain/task';
import useImagePopup from '@/hooks/useImagePopup';
import { ImagePopup } from '../Image/ImagePopup';

const descriptionMaxLen = 50;

const statusColors = {
  completed: 'bg-green-500',
  inProgress: 'bg-yellow-500',
  blocked: 'bg-red-500',
};


export const DevlogCard = ({
  title,
  description,
  status,
  attachments,
  createdAt
}: Task) => {

  const { closePopup, openPopup, popupImage } = useImagePopup();
  
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="block p-4 bg-stone-900 shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300 my-5">
      <div className="flex items-start justify-between">
        <h5 className="text-lg font-bold">{title}</h5>
        <span className={`h-3 w-3 rounded-full ${statusColors[status]} inline-block`}></span>
      </div>
      <p className="text-gray-600 text-sm mt-2">
        {description && (isExpanded ? description : truncateText(description, descriptionMaxLen))}
        {description && description.length > descriptionMaxLen && (
          <button onClick={() => setIsExpanded(!isExpanded)} className="text-purple-600 text-xs ml-2">
            {isExpanded ? 'Less' : 'More'}
          </button>
        )}
      </p>
      <div className="flex mt-2 space-x-2">
        {attachments && attachments.map((attachment, index) => (
          <div key={index} className="w-16 h-16 relative">
            <Image
              src={attachment.url}
              alt={`Attachment ${index + 1}`}
              width={500}
              height={500}
              className="rounded-md"
              onClick={() => openPopup(attachment.url, `Attachment ${index + 1}`)}
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
      <ImagePopup
        src={popupImage?.src}
        alt={popupImage?.alt}
        onClose={closePopup}
        isOpen={popupImage !== null}
      />
    </div>
  );
};
