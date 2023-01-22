import classNames from "classnames";
import Image from "next/image";

type CardProps = {
  title: string;
  description: string;
  imageUrl: string;
  reverse?: boolean;
};

export const Card = ({
  title,
  description,
  imageUrl,
  reverse = false,
}: CardProps) => {
  return (
    <div
      className={classNames("flex items-center my-10", {
        "flex-row-reverse": reverse,
      })}
    >
      <Image
        src={imageUrl}
        alt={`${title} image`}
        width={300}
        height={200}
        className="w-3/6 rounded-md"
      />
      <div className="w-3/6 p-3">
        <h1 className="text-xl">{title.toUpperCase()}</h1>
        <p className="text-xs text-justify">{description}</p>
      </div>
    </div>
  );
};
