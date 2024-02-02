"use client";

import { ButtonColor, ButtonShape, ButtonSize } from "./Button.types";

// import { PropsWithChildren, forwardRef } from "react";
// import { ButtonProps } from "./Button.types";

const style: {
  base: string;
  size: Record<ButtonSize, string>;
  shape: Record<ButtonShape, string>;
  color: Record<ButtonColor, string>;
} = {
  base: "",
  size: {
    xs: "",
    sm: "",
    md: "",
    lg: "",
  },
  shape: {
    square: "",
    rounded: "",
  },
  color: {
    active: "",
    negative: "",
    default: "",
    gray: "",
    white: "",
  },
};

const Button = () => {
  // const {
  //   size = "md",
  //   shape = "square",
  //   color = "default",
  //   className,
  //   ...rest
  // } = props;

  return <button type="button">temp</button>;
};

export default Button;
