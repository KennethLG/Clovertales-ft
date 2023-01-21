import { config } from "@/config";
import Image from "next/image";

type PlatformCardProps = {
  platform: string;
  iconName: string;
};

export const PlatformCard = ({ platform, iconName }: PlatformCardProps) => {
  return (
    <div className="bg-fuchsia-900 flex">
      <Image
        src={`${config.aws.cdn}/icons/${iconName}.png`}
        width={100}
        height={100}
        alt={`${platform} icon`}
      />
      <h1>{platform}</h1>
    </div>
  );
};
