import { RefObject, useEffect } from "react";

const useVideoAutoplayOnIntersection = (
  videoRef: RefObject<HTMLVideoElement>,
  videoSourceRef: RefObject<HTMLSourceElement>,
  videoUrl: string,
  threshold: number = 1
) => {
  useEffect(() => {
    const videoElement = videoRef.current;
    const sourceElement = videoSourceRef.current;
    if (!videoElement || !sourceElement) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!sourceElement.src) {
              sourceElement.src = videoUrl;
              videoElement.load();
            }
            videoElement.play();
          } else {
            videoElement.pause();
          }
        });
      },
      {
        threshold,
      }
    );

    observer.observe(videoElement);

    return () => observer.disconnect();
  }, [videoRef, videoSourceRef, videoUrl, threshold]);
};

export default useVideoAutoplayOnIntersection;
