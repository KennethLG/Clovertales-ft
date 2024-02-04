"use client";

import { SocialItem } from "./SocialItem";
import { FaFacebook, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";

export const SocialList = () => {
  const social = [
    {
      link: "https://www.facebook.com/clovertalesdev",
      Icon: FaFacebook,
    },
    {
      link: "https://twitter.com/clovertalesdev",
      Icon: FaTwitter,
    },
    {
      link: "https://www.youtube.com/@clovertales",
      Icon: FaYoutube,
    },
    {
      link: "https://clovertales.itch.io",
      Icon: "itchio",
    },
    {
      link: "https://gamejolt.com/@CloverTales",
      Icon: "gamejolt",
    },
    {
      link: "https://www.tiktok.com/@clovertalesdev",
      Icon: FaTiktok,
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
