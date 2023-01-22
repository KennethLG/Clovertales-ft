import { config } from "@/config";
import Image from "next/image";

type PlatformCardProps = {
  name: string;
  iconName: string;
  link: string;
};

export const PlatformCard = ({ name, iconName, link }: PlatformCardProps) => {
  return (
    <a
      target="_blank"
      href={link}
      rel="noopener noreferrer"
      className="w-1/2 md:w-1/3 lg:w-1/3"
    >
      <div className="justify-around flex items-center p-1">
        <Image
          src={`${config.aws.cdn}/icons/${iconName}.png`}
          width={80}
          height={80}
          alt={`${name} icon`}
        />
        <h1 className="text-xl">{name}</h1>
      </div>
    </a>
  );
};
