import React, { ComponentProps } from "react";
import "./index.css";

interface IButtonWithIcon extends ComponentProps<"button"> {
  children: React.ReactNode;
}

interface IIconButton extends ComponentProps<"button"> {
  children: React.JSX.Element;
}
export const ButtonWithIcon = (props: IButtonWithIcon) => {
  const { children, className, ...rest } = props;
  return (
    <button
      className={`button flex justify-between gap-[1.5rem] items-center uppercase relative rounded-[2rem] text-sm p-0 pl-[1.3rem] z-[1] whitespace-nowrap text-ellipsis  text-white font-bold bg-transparent border-[2px] border-[#ffb400] cursor-pointer outline-none overflow-hidden ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

