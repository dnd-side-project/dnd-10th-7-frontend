export type InputProps = {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    placeholder: string;
    size: InputSize;
    textSize : InputSize;
    shape: InputShape;
    borderSize: InputSize;
    backgroundColors: InputColor;
    search?: boolean;
    defaultValue?: string | number;
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

export const inputColors = {
    purple: 'purple',
    white: 'white'
} as const;
export type InputColor = (typeof inputColors)[keyof typeof inputColors]