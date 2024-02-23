import { ButtonHTMLAttributes } from "react";

export const buttonSizes = {
  xs: "xs",
  sm: "sm",
  md: "md",
  lg: "lg",
} as const;
export type ButtonSize = (typeof buttonSizes)[keyof typeof buttonSizes];

export const buttonShapes = {
  square: "square",
  rounded: "rounded",
} as const;
export type ButtonShape = (typeof buttonShapes)[keyof typeof buttonShapes];

export const buttonColors = {
  active: "active",
  default: "default",
  // hover: "hover",
  border: "border",
  gray: "gray",
  black: "black",
  disabled: "disabled",
  grayBorder: "grayBorder",
  thinPurple: "thinPurple",
} as const;
export type ButtonColor = (typeof buttonColors)[keyof typeof buttonColors];

export type ButtonProps = {
  size?: ButtonSize;
  shape?: ButtonShape;
  color?: ButtonColor;
  className?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;
