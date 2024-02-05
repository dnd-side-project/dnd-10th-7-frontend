export type GrayInputProps = {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    size: GrayInputSize;
}

export const grayInputSizes = {
    xs: 'xs',
    md: 'md',
} as const;
export type GrayInputSize = (typeof grayInputSizes)[keyof typeof grayInputSizes];

