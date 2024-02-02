export type InputProps = {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    size: InputSize;
    textSize : InputSize;
    shape: InputShape;
};

export const inputSizes = {
    xs: 'xs',
    md: 'md',
    lg: 'lg',
} as const;
export type InputSize = (typeof inputSizes)[keyof typeof inputSizes];

export const inputShapes = {
square: 'square',
rounded: 'rounded',
} as const;
export type InputShape = (typeof inputShapes)[keyof typeof inputShapes];