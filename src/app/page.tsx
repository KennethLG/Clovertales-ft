import { Platforms } from "@/components/Home/Platforms";
import { About } from "@/components/Home/About";
import { config } from "@/config";
import { Platform } from "@/domain/platform";
import { SearchingLightGeneralDescription } from "@/components/Overview/Overview";
import { Preview } from "@/components/Home/Preview";
import { Card } from "@/domain/card";
import Subscribe from "@/components/Home/Subscribe";

const fetchPlatforms = async () => {
  const response = await fetch(`${config.aws.api}/platforms`, {
    next: {
      revalidate: config.time.day,
    },
  });
  const platforms = await response.json();
  return platforms as Platform[];
};

const fetchGallery = async () => {
  const response = await fetch(`${config.aws.api}/gallery`, {
    next: {
      revalidate: config.time.day
    }
  });
  const gallery = await response.json();
  return gallery as Card[];
};

export default async function Page() {
  const platforms = await fetchPlatforms();
  const gallery = await fetchGallery();

  return (
    <>
      <About />
      <SearchingLightGeneralDescription />
      {gallery && <Preview gallery={gallery} />}
      {platforms && <Platforms platforms={platforms} />}
      <Subscribe />
    </>
  );
}
