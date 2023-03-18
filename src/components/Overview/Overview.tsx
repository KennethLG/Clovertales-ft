import { Image } from "@/components/global/Image/Image"
import { config } from "@/config"

export const SearchingLightGeneralDescription = () => {
  return (
    <>
      <Image
        alt="Searching Light logo"
        src={`${config.aws.cdn}/home/logo.png`}
        width={300}
        height={300}
        loading="lazy"
        className="h-auto w-full md:w-2/5 m-auto rounded-2xl"
      />

      <p className="mt-10 text-center">
        Delve into the captivating and enigmatic universe of Searching Light, an
        adventure and puzzle video game set in two parallel worlds, starring a
        young hero with extraordinary abilities. On this mysterious journey,
        you&apos;ll face enigmatic challenges and discover a world inhabited by
        fantastic creatures, all accompanied by an immersive soundtrack and an
        abstract, intriguing artistic style.
      </p>
    </>
  );
}