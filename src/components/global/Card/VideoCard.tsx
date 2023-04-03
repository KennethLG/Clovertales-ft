"use client"

import { CardLayout } from "./CardLayout";

type VideoCardProps = {
  title: string;
  description: string;
  videoUrl: string;
  date?: string;
  reverse?: boolean;
  url?: string;
};

export const VideoCard = ({
  title,
  description,
  videoUrl,
  date,
  reverse,
  url,
}: VideoCardProps) => {

  return (
    <CardLayout
      title={title}
      description={description}
      date={date}
      reverse={reverse}
      url={url}
    >
      <div className="p-3 w-full md:w-3/6">
        <iframe
        
          height={500}
          src={videoUrl}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full"
        />
      </div>
    </CardLayout>
  );
};
