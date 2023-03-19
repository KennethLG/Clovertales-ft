import { Card } from "@/components/global/Card/Card";
import { Conclusion } from "@/components/Overview/Conclusion";
import { GameplayGallery } from "@/components/Overview/GameplayGallery";
import { SearchingLightGeneralDescription } from "@/components/Overview/Overview";
import { cards } from "./data";

const Overview = () => {

  return (
    <>
      <SearchingLightGeneralDescription />
      {cards.map((card, i) => (
        <Card key={card.title} {...card} reverse={i % 2 === 0} />
      ))}
      <Conclusion />
      <GameplayGallery />
    </>
  );
};

export default Overview;
