import { config } from "@/config";
import Image from "next/image";

type PlatformCardProps = {
  platform: string;
  iconName: string;
};

export const PlatformCard = ({ platform, iconName }: PlatformCardProps) => {
  return (
    <div className="w-1/2 md:w-1/3 lg:w-1/3">
      <div className="justify-around flex items-center p-1">
        <Image
          src={`${config.aws.cdn}/icons/${iconName}.png`}
          width={80}
          height={80}
          alt={`${platform} icon`}
        />
        <h1 className="text-xl">{platform}</h1>
      </div>
    </div>
  );
};
