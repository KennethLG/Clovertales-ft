import classNames from "classnames";
import { Image } from "./Image";
import { useEffect, useState } from "react";

interface ImagePopupProps {
  src?: string;
  alt?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const ImagePopup = ({ src, alt, isOpen, onClose }: ImagePopupProps) => {
  const [isRendered, setIsRendered] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setIsRendered(true);
    } else {
      const timer = setTimeout(() => setIsRendered(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const popupClasses = classNames(
    "fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-80 z-50 transition-opacity duration-300 select-none",
    {
      "opacity-0 pointer-events-none": !isOpen,
      "opacity-100 pointer-events-auto": isOpen,
    }
  );

  return isRendered ? (
    <div className={popupClasses}>
      <div className="relative w-5/6 h-5/6">
        {src && alt && (
          <Image
            src={src}
            alt={alt}
            fill
            className="absolute top-0 left-0 w-full h-full object-contain"
          />
        )}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="absolute top-2 right-2 text-white font-bold text-2xl cursor-pointer"
        >
          X
        </button>
      </div>
    </div>
  ) : null;
};
