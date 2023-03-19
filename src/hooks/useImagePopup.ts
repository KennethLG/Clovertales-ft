import { useState } from "react";

interface ImagePopupState {
  src: string;
  alt: string;
}

const useImagePopup = () => {
  const [popupImage, setPopupImage] = useState<ImagePopupState | null>(null);

  const openPopup = (src: string, alt: string) => {
    setPopupImage({ src, alt });
  };

  const closePopup = () => {
    setPopupImage(null);
  };

  return { popupImage, openPopup, closePopup };
};

export default useImagePopup;