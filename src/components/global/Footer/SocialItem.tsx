"use client";

import { config } from "@/config";
import Image from "next/image";
import { IconType } from "react-icons";

type SocialItemProps = {
  link: string;
  Icon: IconType | string;
};

export const SocialItem = ({ link, Icon }: SocialItemProps) => {
  return (
    <a className="m-2" href={link} target="_blank" rel="noopener noreferrer">
      {typeof Icon === "string" ? (
        <Image
          src={`${config.aws.cdn}/icons/${Icon}.png`}
          width={32}
          height={32}
          alt={`${Icon} icon`}
        />
      ) : (
        <Icon size={24} />
      )}
    </a>
  );
};
