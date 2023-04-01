import classNames from "classnames";
import { ReactNode } from "react";
import LinkLayout from "./LinkLayout";
import { formatDate } from "@/utils/date";

type CardLayoutProps = {
  title: string;
  description: string;
  date?: string;
  reverse?: boolean;
  url?: string;
  children: ReactNode;
};

export const CardLayout = ({
  title,
  description,
  date,
  reverse = false,
  url,
  children,
}: CardLayoutProps) => {
  return (
    <div
      className={classNames("flex justify-evenly items-center my-28", {
        "flex-row-reverse": reverse,
      })}
    >
      {children}
      <LinkLayout url={url}>
        <h1 className="text-2xl">{title.toUpperCase()}</h1>
        <p className="text-xs text-justify">{description}</p>
        {date && <h3 className="text-xl py-3">{formatDate(date)}</h3>}
      </LinkLayout>
    </div>
  );
};
