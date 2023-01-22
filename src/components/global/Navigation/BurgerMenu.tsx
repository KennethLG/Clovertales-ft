import classNames from "classnames";
import Link from "next/link";

type BurgerMenuProps = {
  list: Array<{ name: string; link: string }>;
  open: boolean;
};

export const BurgerMenu = ({ list, open }: BurgerMenuProps) => {
  return (
    <div
      className={classNames(
        "w-screen h-screen top-0 right-0 bg-white/75 text-black justify-center items-center flex flex-col z-40",
        {
          fixed: open,
          hidden: !open,
        }
      )}
    >
      {list.map(({ name, link }, i) => (
        <Link
          href={link}
          key={name}
          className="text-3xl text-slate-900 font-semibold my-2"
        >
          {name}
        </Link>
      ))}
    </div>
  );
};
