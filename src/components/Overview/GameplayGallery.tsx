import { Card } from "@/domain/card";
import { Gallery } from "../global/Gallery/Gallery";

interface GameplayGalleryProps {
  gameplayGallery: Card[];
}

export const GameplayGallery = ({ gameplayGallery }: GameplayGalleryProps) => {
  return (
    <section className="text-center mt-5">
      <h1 className="text-5xl">Gameplay gallery</h1>
      <Gallery images={gameplayGallery} />
    </section>
  );
}