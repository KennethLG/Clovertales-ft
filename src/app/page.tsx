import { Platforms } from "@/components/Home/Platforms";
import { About } from "@/components/Home/About";
import { config } from "@/config";
import { Platform } from "@/domain/platform";
import { SearchingLightGeneralDescription } from "@/components/Overview/Overview";
import { Preview } from "@/components/Home/Preview";
import { Card } from "@/domain/card";
import Subscribe from "@/components/Home/Subscribe/Subscribe";
import { AsideNews } from "@/components/Home/AsideNews";
import { AsideDevlog } from "@/components/Home/AsideDevlog";

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
      revalidate: config.time.day,
    },
  });
  const gallery = await response.json();
  return gallery as Card[];
};

export default async function Page() {
  const platforms = await fetchPlatforms();
  const gallery = await fetchGallery();

  return (
    <div className="flex flex-col pb-16 md:pb-0 gap-16 md:flex-row md:gap-1 w-full min-h-screen">
      {/* Main Content - First on mobile, second in order on desktop */}
      <div className="flex-1 order-1 md:order-2 px-5">
        <About />
        <SearchingLightGeneralDescription />
        {gallery && <Preview gallery={gallery} />}
        {platforms && <Platforms platforms={platforms} />}
        <Subscribe />
      </div>

      {/* AsideNews - Second on mobile, third in order on desktop */}
      <div className="order-3 md:order-3 w-full md:w-3/12">
        <AsideNews />
      </div>

      {/* AsideDevlog - Third on mobile, first in order on desktop */}
      <div className="order-2 md:order-1 w-full md:w-3/12">
        <AsideDevlog />
      </div>
    </div>
  );
}
