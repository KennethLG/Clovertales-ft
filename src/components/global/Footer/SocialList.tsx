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
      link: "https://twitter.com/CloverStoryFT2",
      Icon: FaTwitter,
    },
    {
      link: "https://twitter.com/CloverStoryFT3",
      Icon: FaYoutube,
    },
    {
      link: "https://twitter.com/CloverStoryFT4",
      Icon: FaInstagram,
    },
  ];

  return (
    <div className="flex items-center">
      {social.map((item) => (
        <SocialItem key={item.link} link={item.link} Icon={item.Icon} />
      ))}
    </div>
  );
};
