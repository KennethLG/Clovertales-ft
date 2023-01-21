import { PlatformCard } from "./Platform-card";

export const Platforms = () => {
  const platforms = [
    {
      name: "STEAM",
      link: "https://store.steampowered.com/app/1572470/Clover_Story/",
      iconName: "steam",
    },
    {
      name: "GOOGLE PLAY",
      link: "https://play.google.com/store/apps/details?id=com.searchinglight.cloverstory",
      iconName: "playstore",
    },
    {
      name: "APP STORE",
      link: "https://apps.apple.com/us/app/clover-story/id1569980008",
      iconName: "appstore",
    },
    {
      name: "ITCH.IO",
      link: "https://searchinglight.itch.io/clover-story",
      iconName: "itchio",
    },
    {
      name: "GAME JOLT",
      link: "https://gamejolt.com/games/cloverstory/591000",
      iconName: "gamejolt",
    },
  ];
  return (
    <div className="text-center max-w-2xl m-auto">
      <h1 className="text-5xl">Start NOW!</h1>
      {platforms.map((platform) => (
        <PlatformCard
          platform={platform.name}
          iconName={platform.iconName}
          key={platform.name}
        />
      ))}
    </div>
  );
};
