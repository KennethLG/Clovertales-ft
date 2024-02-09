import { useState, useEffect } from "react";

// Custom hook to check for window width
export const useWindowWidth = (threshold = 640) => {
  const [isWideScreen, setIsWideScreen] = useState(true);

  useEffect(() => {
    const updateWidth = () => {
      setIsWideScreen(window.innerWidth > threshold);
    };

    window.addEventListener("resize", updateWidth);
    updateWidth(); // Initial check

    return () => window.removeEventListener("resize", updateWidth);
  }, [threshold]);

  return isWideScreen;
};
