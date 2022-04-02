import React from "react";

interface IButton {
  children: React.ReactNode;
  buttonColor: string;
  clickFunction?: () => void;
  disabled?: boolean;
}

const Button: React.FC<IButton> = ({
  children,
  buttonColor,
  clickFunction,
  disabled,
}) => {
  return (
    <button
      className={
        `font-normal py-4 px-10 border-solid border rounded-lg cursor-pointer uppercase bg-[#${buttonColor}] hover:bg-black transition ease-in-out text-white` +
        (disabled ? " disabled" : "")
      }
      onClick={clickFunction}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
