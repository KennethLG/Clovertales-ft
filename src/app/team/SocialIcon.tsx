import {
  SiArtstation,
  SiFacebook,
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiTwitter,
} from "react-icons/si";

interface SocialIconProps {
  name: string;
}

export default function SocialIcon({ name }: SocialIconProps) {

  const socialIconProps = {
    size: 16
  }

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
    default:
      return <p>{name}</p>;
  }
}
