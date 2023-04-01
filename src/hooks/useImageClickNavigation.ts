import { useRouter } from "next/navigation";
import useImagePopup from "./useImagePopup";

const useImageClickNavigation = (
  url?: string,
  imageUrl?: string,
  alt?: string
) => {
  const { push } = useRouter();
  const { closePopup, openPopup, popupImage } = useImagePopup();

  const handleImageClick = () => {
    if (url) {
      return push(url);
    }
    if (imageUrl && alt) {
      openPopup(imageUrl, alt);
    }
  };

  return { handleImageClick, closePopup, popupImage };
};

export default useImageClickNavigation;
