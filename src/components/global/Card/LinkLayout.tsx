import classNames from "classnames";
import Link from "next/link";

interface LinkLayoutProps {
  children: React.ReactNode;
  url?: string;
}

export default function LinkLayout ({ children, url }: LinkLayoutProps) {
  if (url) {
    return (
      <Link
        href={url}
        className={classNames("w-3/6 p-3", {
          "hover:text-purple-400 ease-in-out duration-200": url !== undefined,
        })}
      >
        {children}
      </Link>
    );
  }
  return <div className="w-3/6 p-3">{children}</div>;
};

