import classNames from "classnames";
import NextImage, { ImageProps } from "next/image";

export const Image = (props: ImageProps) => {
  return (
    <div
      className={classNames({
        "cursor-pointer transform hover:-translate-y-2 transition duration-300":
          props.onClick !== undefined,
      })}
    >
      <NextImage
        {...props}
        className={classNames(props.className || "rounded-md")}
      />
    </div>
  );
};
