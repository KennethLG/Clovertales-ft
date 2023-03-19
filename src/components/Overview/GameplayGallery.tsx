import { gameplayGallery } from "@/mocks/gallery";
import { Gallery } from "../global/Gallery/Gallery";

export const GameplayGallery = () => {
  return (
    <section className="text-center mt-5">
      <h1 className="text-5xl">Gameplay gallery</h1>
      <Gallery images={gameplayGallery} />
    </section>
  );
}