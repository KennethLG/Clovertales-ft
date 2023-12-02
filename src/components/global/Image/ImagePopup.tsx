import classNames from "classnames";
import { Image } from "./Image";

interface ImagePopupProps {
  src?: string;
  alt?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const ImagePopup = ({ src, alt, isOpen, onClose }: ImagePopupProps) => {

  return (
    <div
      className={classNames(
        "fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-80 z-50 transition-opacity duration-300 select-none",
        {
          "opacity-100": isOpen,
          "opacity-0": !isOpen,
          "pointer-events-none": !isOpen,
        }
      )}
    >
      <div className="relative w-5/6 h-5/6 pointer-events-none">
        {src && alt ? (
          <Image
            src={src}
            alt={alt}
            fill
            className="absolute top-0 left-0 w-full h-full object-contain"
          />
        ) : (
          <></>
        )}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white font-bold text-2xl cursor-pointer"
        >
          X
        </button>
      </div>
    </div>
  );
};
