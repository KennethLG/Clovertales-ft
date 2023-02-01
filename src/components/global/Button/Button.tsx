import { FormEventHandler } from "react";

type ButtonProps = {
  onClick?: () => void;
  onSubmit?: FormEventHandler<HTMLButtonElement>;
  type?: "button" | "submit";
  children?: React.ReactNode;
};

export const Button = ({ onClick, onSubmit, type, children }: ButtonProps) => {
  return (
    <button
      type={type}
      onSubmit={onSubmit}
      onClick={onClick}
      className="bg-fuchsia-500 hover:bg-fuchsia-700 text-white font-bold py-2 px-4 rounded my-5"
    >
      {children}
    </button>
  );
};
