export type TextareaProps = {
  value: string;
  entire: number;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
  size: TextareaSize;
  borderSize: TextareaSize;
  backgroundColors: TextareaColor;
  textSize: TextareaSize;
  className?: string;
  onKeyDown?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
};

export const textareaSizes = {
  xs: "xs",
  md: "md",
  lg: "lg",
  xl: "xl",
} as const;
export type TextareaSize = (typeof textareaSizes)[keyof typeof textareaSizes];

export const textareaColors = {
  white: "white",
  purple1: "purple1",
  purple5: "purple5",
  error: "error",
} as const;
export type TextareaColor =
  (typeof textareaColors)[keyof typeof textareaColors];
