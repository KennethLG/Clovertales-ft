import { config } from "@/config";
import { Image } from "../global/Image/Image";

export const Conclusion = () => {
  return (
    <>
      <Image
        alt="Searching Light logo"
        src={`${config.aws.cdn}/snowBg-small.png`}
        width={300}
        height={300}
        loading="lazy"
        className="h-auto w-4/5 m-auto"
      />
      <p className="text-center mt-5">
        Dive into the amazing universe of <strong>Searching Light</strong> and
        accompany our brave hero in his quest to uncover the mysteries of these
        parallel worlds. In this exciting adventure full of dangers and
        surprises, only those with enough wit and determination will be able to
        unravel the truth hidden in the shadows.
      </p>
    </>
  );
};
