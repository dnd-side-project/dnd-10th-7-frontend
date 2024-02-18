import { GrayInputProps, GrayInputSize } from ".";
import clsx from "clsx";

const style: {
  base: string;
  sizes: Record<GrayInputSize, string>;
} = {
  base: "bg-gray-10 rounded-[5px] px-[16px] text-h2 caret-purple-main1 focus:outline-none focus:ring-1 focus:ring-purple-main1 px-auto",
  sizes: {
    xs: "min-h-[50px] min-w-[415px]",
    md: "min-h-[56px] min-w-[540px]",
  },
};

export const GrayInput = ({
  value,
  onChange,
  placeholder,
  className,
  //style
  size,
}: GrayInputProps) => {
  return (
    <>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={clsx(style.base, style.sizes[size], className)}
      />
    </>
  );
};

GrayInput.displayName = "GrayInput";

export default GrayInput;
