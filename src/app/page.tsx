import { Banner } from "@/components/Home/Banner";
import { Platforms } from "@/components/Home/Platforms";
import { About } from "@/components/Home/About";
import { config } from "@/config";
import { Platform } from "@/domain/platform";
import { SearchingLightGeneralDescription } from "@/components/Overview/Overview";
import { Gallery } from "@/components/global/Gallery/Gallery";
import { gallery } from "@/mocks/gallery";

const fetchPlatforms = async () => {
  const response = await fetch(`${config.aws.api}/platforms`);
  const platforms = await response.json();
  return platforms.data as Platform[];
};

export default async function Page() {
  const platforms = await fetchPlatforms();

  return (
    <>
      <About />
      <SearchingLightGeneralDescription />
      <Gallery images={gallery.slice(0, 3)} />
      {platforms && <Platforms platforms={platforms} />}
    </>
  );
}
