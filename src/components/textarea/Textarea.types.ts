export type TextareaProps = {
    value: string;
    entire: number;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder: string;
    size: TextareaSize;
    borderSize: TextareaSize;
    backgroundColors: TextareaColor;
    borderColor?: TextareaColor;
};

export const textareaSizes = {
    xs: 'xs',
    md: 'md',
    lg: 'lg',
} as const;
export type TextareaSize = (typeof textareaSizes)[keyof typeof textareaSizes];

export const textareaColors = {
    white: 'white',
    purple5: 'purple5',
    purple1: 'purple1',
    purple2: 'purple2',
} as const;
export type TextareaColor = (typeof textareaColors)[keyof typeof textareaColors]