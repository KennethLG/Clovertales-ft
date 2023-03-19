import { ReactNode } from "react";
import { Image } from "../global/Image/Image";

interface FeatureProps {
  children: ReactNode;
  imageUrl: string;
}

export const Feature = ({ children, imageUrl }: FeatureProps) => {
  return (
    <section>
      <p>{children}</p>
      <Image src={imageUrl} alt={"Feature image"}/>
    </section>
  );
};
