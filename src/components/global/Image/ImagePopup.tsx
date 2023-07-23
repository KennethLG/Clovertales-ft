import classNames from "classnames";
import { Image } from "./Image";
import { useSwipeable } from "react-swipeable";

interface ImagePopupProps {
  src?: string;
  alt?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const ImagePopup = ({ src, alt, isOpen, onClose }: ImagePopupProps) => {

  const handlers = useSwipeable({
    onSwipedRight: () => {
      console.log("right")
    },
    onSwipedLeft: () => {
      console.log("left");
    }
  });

  return (
    <div
      className={classNames(
        "fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-80 z-50 transition-opacity duration-300",
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
            {...handlers}
          />
        ) : (
          <></>
        )}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white font-bold text-2xl"
        >
          X
        </button>
      </div>
    </div>
  );
};
