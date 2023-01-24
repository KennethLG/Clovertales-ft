import { platforms } from "@/mocks/platforms";
import { PlatformCard } from "./Platform-card";

export const Platforms = () => {
  return (
    <div className="text-center w-full m-auto my-16">
      <h1 className="text-5xl my-4">Start NOW!</h1>
      <div className="flex flex-wrap justify-center">
        {platforms.map((platform) => (
          <PlatformCard {...platform} key={platform.name} />
        ))}
      </div>
    </div>
  );
};
