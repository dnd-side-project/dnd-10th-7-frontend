import clsx from "clsx";
import input, { InputProps, InputSize, InputShape } from ".";

const style: {
    base: string;
    sizes: Record<InputSize, string>;
    textSizes: Record<InputSize, string>;
    shapes: Record<InputShape, string>;
  } = {
    // TODO: 스타일 전부 바꿔야 됨
    base: "border border-1 border-purple-main1",
    sizes: {
      xs: 'min-h-40px py-6px px-10px min-w-707',
      md: 'min-h-40px py-9px px-12px min-w-707',
      lg: 'min-h-48px py-10px px-12px min-w-1072px',
    },
    textSizes: {
      xs: 'text-body2',
      md: 'text-body2',
      lg: 'text-h2',
    },
    shapes: {
      square: 'rounded',
      rounded: 'rounded-full',
    },
  };

export const Input = ({
    value,
    onChange,
    placeholder,

    // style
    size,
    textSize,
    shape,

}: InputProps) => {
    return (
        <div className={clsx(style.sizes[size])}>
            <input 
                type="text" 
                value={value}
                onChange={onChange}
                placeholder={placeholder} 
                className={clsx(style.textSizes[textSize], style.base, style.shapes[shape], style.sizes[size])}
            />
        </div>
    )
}

export default Input;