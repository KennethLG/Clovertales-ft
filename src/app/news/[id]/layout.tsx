import classNames from "classnames";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

export default function Layout({ children }: { children: React.ReactNode }) {

  const GoBack = ({ className }: { className: string }) => (
    <Link
      className={classNames(
        "flex items-center hover:text-purple-400 ease-in-out duration-200 cursor-pointer",
        className
      )}
      href={"/news"}
    >
      <IoIosArrowBack size={24} />
      <h3>Return to News</h3>
    </Link>
  );

  return (
    <section>
      <GoBack className="mb-8" />
      {children}
      <GoBack className="mt-8" />
    </section>
  );
}
