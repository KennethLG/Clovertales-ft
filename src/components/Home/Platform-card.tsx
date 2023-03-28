"use client";
import { config } from "@/config";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";

type PlatformCardProps = {
  name: string;
  iconName: string;
  link: string;
};

export const PlatformCard = ({ name, iconName, link }: PlatformCardProps) => {
  const onClick = () => {
    toast.success(
      <span>
        <strong>{name}</strong> AVAILABLE SOON!
      </span>
    );
  };

  const Wrapper = ({ children }: { children: React.ReactNode }) => {
    const commonProps = {
      className:
        "w-1/2 md:w-1/3 lg:w-1/3 hover:text-fuchsia-400 justify-around flex items-center p-1 cursor-pointer",
    };

    return link ? (
      <a target="_blank" href={link} rel="noopener noreferrer" {...commonProps}>
        {children}
      </a>
    ) : (
      <div {...commonProps} onClick={onClick}>
        {children}
      </div>
    );
  };

  return (
    <Wrapper>
      <Image
        src={`${config.aws.cdn}/icons/${iconName}.png`}
        width={80}
        height={80}
        alt={`${name} icon`}
      />
      <h1 className="text-xl">{name}</h1>
      <Toaster />
    </Wrapper>
  );
};
