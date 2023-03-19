import { Image } from "./Image";

interface ImagePopupProps {
  src: string;
  alt: string;
  onClose: () => void;
}

export const ImagePopup = ({ src, alt, onClose }: ImagePopupProps) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="relative w-3/4 h-3/4">
        <Image
          src={src}
          alt={alt}
          fill
          className="absolute top-0 left-0 w-full h-full object-contain"
        />
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
