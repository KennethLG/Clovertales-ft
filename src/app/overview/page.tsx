import { Card as ICard } from "@/domain/card";
import { Conclusion } from "@/components/Overview/Conclusion";
import { GameplayGallery } from "@/components/Overview/GameplayGallery";
import { SearchingLightGeneralDescription } from "@/components/Overview/Overview";
import { config } from "@/config";
import { cards } from "./data";
import { VideoCard } from "@/components/global/Card/VideoCard";

const fetchGallery = async () => {
  const response = await fetch(`${config.aws.api}/gallery`, {
    next: {
      revalidate: config.time.day,
    },
  });
  const gallery = await response.json();
  return gallery as ICard[];
};

const Overview = async () => {

  const gallery = await fetchGallery();

  return (
    <>
      <SearchingLightGeneralDescription />
      {cards.map((card, i) => (
        <VideoCard key={card.title} {...card} reverse={i % 2 === 0} />
      ))}
      <Conclusion />
      <GameplayGallery gameplayGallery={gallery} />
    </>
  );
};

export default Overview;
