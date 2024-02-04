import {
  SiArtstation,
  SiFacebook,
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiTwitter,
  SiSpotify,
  SiTiktok,
} from "react-icons/si";

interface SocialIconProps {
  name: string;
}

export default function SocialIcon({ name }: SocialIconProps) {
  const socialIconProps = {
    size: 20,
    color: "white",
  };

  switch (name) {
    case "ArtStation":
      return <SiArtstation {...socialIconProps} />;
    case "Instagram":
      return <SiInstagram {...socialIconProps} />;
    case "GitHub":
      return <SiGithub {...socialIconProps} />;
    case "Twitter":
      return <SiTwitter {...socialIconProps} />;
    case "Facebook":
      return <SiFacebook {...socialIconProps} />;
    case "LinkedIn":
      return <SiLinkedin {...socialIconProps} />;
    case "Spotify":
      return <SiSpotify {...socialIconProps} />;
    case "TikTok":
      return <SiTiktok {...socialIconProps} />;
    default:
      return <p>{name}</p>;
  }
}
