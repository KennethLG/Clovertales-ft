import { Banner } from "@/components/Home/Banner";
import { Platforms } from "@/components/Home/Platforms";
import { About } from "@/components/Home/About";
import { Gallery } from "@/components/Home/Gallery";
import { config } from "@/config";
import { GetStaticProps } from "next";
import { Platform } from "@/domain/platform";

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
        <div className="p-5 flex justify-center">
          <iframe
            className="max-w-5xl w-full"
            height={400}
            src="https://www.youtube.com/embed/UAO2urG23S4"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        {platforms && <Platforms platforms={platforms} />}
        <Gallery />
      </div>
    </main>
  );
}
