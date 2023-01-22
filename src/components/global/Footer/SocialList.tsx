"use client";

import { SocialItem } from "./SocialItem";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

export const SocialList = () => {
  const social = [
    {
      link: "https://twitter.com/CloverStoryFT",
      Icon: FaFacebook,
    },
    {
      link: "https://twitter.com/CloverStoryFT",
      Icon: FaTwitter,
    },
    {
      link: "https://twitter.com/CloverStoryFT",
      Icon: FaYoutube,
    },
    {
      link: "https://twitter.com/CloverStoryFT",
      Icon: FaInstagram,
    },
  ];

  return (
    <ul className="flex items-center">
      {social.map((item) => (
        <SocialItem key={item.link} link={item.link} Icon={item.Icon} />
      ))}
    </ul>
  );
};
