import { PropsWithChildren, forwardRef } from "react";
import {
  ButtonColor,
  ButtonProps,
  ButtonShape,
  ButtonSize,
} from "./Button.types";
import clsx from "clsx";

const style: {
  base: string;
  size: Record<ButtonSize, string>;
  shape: Record<ButtonShape, string>;
  color: Record<ButtonColor, string>;
} = {
  base: "inline-flex items-center justify-center border-[1.5px] box-border select-none font-fold m-0 p-0 w-fit h-fit border cursor-pointer align-middle disabled:cursor-default",
  size: {
    xs: "min-h-[30px] px-[14px] py-[7px] text-body3 gap-4px",
    sm: "min-h-[40px] px-[15px] py-[10px] text-body1 gap-6px",
    md: "min-h-[48px] px-[16px] py-[10px] text-body1 gap-6px",
    lg: "min-h-[50px] px-[20px] py-[14px] text-h2 gap-8px",
  },
  shape: {
    square: "rounded",
    rounded: "rounded-full",
  },
  color: {
    active: "text-white bg-purple-active border-purple-active",
    default:
      "bg-purple-main1 border-purple-main1 text-white hover:bg-purple-active hoer:border-purple-active",
    // hover: "text-white bg-purple-main2 border-purple-main2",
    border: "text-purple-main1 border-purple-main1 bg-white",
    gray: "bg-[#F5F5F5] text-gray-60 border-[#F5F5F5]",
    black: "bg-black text-white",
    disabled: "bg-gray-40 text-white border-gray-40",
  },
};

const Button = forwardRef<HTMLButtonElement, PropsWithChildren<ButtonProps>>(
  (props, ref) => {
    const {
      size = "md",
      shape = "rounded",
      color = "default",
      startIcon,
      endIcon,
      className,
      children,
      ...rest
    } = props;

    return (
      <button
        type="button"
        ref={ref}
        className={clsx(
          style.base,
          style.shape[shape],
          style.size[size],
          style.color[color],
          className
        )}
        {...rest}
      >
        {startIcon}
        {children}
        {endIcon}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
