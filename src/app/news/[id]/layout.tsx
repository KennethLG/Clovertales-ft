"use client";

import classNames from "classnames";
import { useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const GoBack = ({ className }: { className?: string }) => (
    <div
      className={classNames(
        "flex items-center hover:text-purple-400 ease-in-out duration-200 cursor-pointer",
        className
      )}
      onClick={() => router.back()}
    >
      <IoIosArrowBack size={24} />
      <h3 className="ml-2">Go Back</h3>
    </div>
  );

  return (
    <section>
      <GoBack className="mb-8" />
      {children}
      <GoBack className="mt-8" />
    </section>
  );
}
