"use client";

import { IconType } from "react-icons";

type SocialItemProps = {
  link: string;
  Icon: IconType;
};

export const SocialItem = ({ link, Icon }: SocialItemProps) => {
  return (
    <a className="m-2" href={link} target="_blank" rel="noopener noreferrer">
      <Icon size={24} />
    </a>
  );
};
