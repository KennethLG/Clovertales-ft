"use client"

import { useRef, useState } from "react";
import { CardLayout } from "./CardLayout";
import useVideoAutoplayOnIntersection from "@/hooks/useVideoAutoplayOnIntersection";
import classNames from "classnames";

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
  const videoRef = useRef<HTMLVideoElement>(null);

  useVideoAutoplayOnIntersection(videoRef, 1);

  return (
    <CardLayout
      title={title}
      description={description}
      date={date}
      reverse={reverse}
      url={url}
    >
      <video
        src={videoUrl}
        controls
        className={"w-5/12 rounded-xl shadow-purple-xl max-w-[800px] min-h-[300px]"}
        ref={videoRef}
        width={600}
        height={600}
      />
    </CardLayout>
  );
};
