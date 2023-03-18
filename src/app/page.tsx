import { Banner } from "@/components/Home/Banner";
import { Platforms } from "@/components/Home/Platforms";
import { About } from "@/components/Home/About";
import { config } from "@/config";
import { Platform } from "@/domain/platform";
import { SearchingLightGeneralDescription } from "@/components/Overview/Overview";

const fetchPlatforms = async () => {
  const response = await fetch(`${config.aws.api}/platforms`);
  const platforms = await response.json();
  return platforms.data as Platform[];
};

export default async function Page() {
  const platforms = await fetchPlatforms();

  return (
    <main className="min-h-screen w-full">
      <Banner />

      <div className="max-w-2xl m-auto p-3">
        <About />
        <SearchingLightGeneralDescription />
        {platforms && <Platforms platforms={platforms} />}
      </div>
    </main>
  );
}
