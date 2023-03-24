import Link from "next/link";

interface LinkLayoutProps {
  children: React.ReactNode;
  url?: string;
}

export default function LinkLayout ({ children, url }: LinkLayoutProps) {
  if (url) {
    return (
      <Link href={url} className="w-3/6 p-3">
        {children}
      </Link>
    );
  }
  return <div className="w-3/6 p-3">{children}</div>;
};
