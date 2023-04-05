import classNames from "classnames";
import { FormEventHandler } from "react";

type ButtonProps = {
  onClick?: () => void;
  onSubmit?: FormEventHandler<HTMLButtonElement>;
  type?: "button" | "submit";
  children?: React.ReactNode;
  className?: string;
};

export const Button = ({
  onClick,
  onSubmit,
  type,
  children,
  className,
}: ButtonProps) => {
  const buttonClass = classNames(
    "bg-fuchsia-500 hover:bg-fuchsia-700 text-white font-bold py-2 px-4 rounded my-5 transition ease-in-out",
    className
  );
  return (
    <button
      type={type}
      onSubmit={onSubmit}
      onClick={onClick}
      className={buttonClass}
    >
      {children}
    </button>
  );
};
