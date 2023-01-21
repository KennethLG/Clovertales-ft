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
      className={classNames("flex items-center my-2", {
        "flex-row-reverse": reverse,
      })}
    >
      <Image
        src={`https://picsum.photos/300/200`}
        alt="xd"
        width={300}
        height={200}
        className="w-2/5 rounded-md"
      />
      <div className="w-3/5">
        <h1 className="text-xl">{title.toUpperCase()}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};
