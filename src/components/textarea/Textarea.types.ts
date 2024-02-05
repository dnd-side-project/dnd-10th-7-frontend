export type TextareaProps = {
    value: string;
    valueLength: number;
    entire: number;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder: string;
    size: TextareaSize;
    borderSize: TextareaSize;
    backgroundColors: TextareaColor;
    borderColor?: TextareaColor;
    textSize: TextareaSize;
};

export const textareaSizes = {
    xs: 'xs',
    md: 'md',
    lg: 'lg',
    xl: 'xl'
} as const;
export type TextareaSize = (typeof textareaSizes)[keyof typeof textareaSizes];

export const textareaColors = {
    white: 'white',
    purple1: 'purple1',
    purple5: 'purple5',
} as const;
export type TextareaColor = (typeof textareaColors)[keyof typeof textareaColors]