import NextImage, { ImageProps } from "next/image";

export const Image = (props: ImageProps) => {
  return (
    <div className="w-full">
      <NextImage {...props} />
    </div>
  );
};
