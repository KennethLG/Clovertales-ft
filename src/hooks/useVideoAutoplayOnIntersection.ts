import { RefObject, useEffect } from "react";

const useVideoAutoplayOnIntersection = (
  videoRef: RefObject<HTMLVideoElement>,
  threshold: number = 0.5
) => {
  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
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
  }, [videoRef, threshold]);
};

export default useVideoAutoplayOnIntersection;
