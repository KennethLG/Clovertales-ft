import { Button } from "@/components/global/Button/Button";
import { Social } from "@/domain/member";
import SocialIcon from "./SocialIcon";

interface SocialProps {
  social: Social[];
}

export default function SocialList({ social }: SocialProps) {
  return (
    <div className="flex flex-wrap gap-1">
      {social.map((item) => (
        <a
          className=""
          href={item.url}
          target="_blank"
          key={item.url}
          rel="noopener noreferrer"
        >
          <Button className="px-1 py-1 my-1 text-xs">
            <SocialIcon name={item.name} />
          </Button>
        </a>
      ))}
    </div>
  );
}
