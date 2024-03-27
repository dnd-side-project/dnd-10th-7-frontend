import clsx from "clsx";
import SearchIcon from "@mui/icons-material/Search";
import { forwardRef, PropsWithChildren, useState } from "react";
import { InputProps, InputSize, InputShape, InputColor } from ".";

const style: {
  base: string;
  sizes: Record<InputSize, string>;
  textSizes: Record<InputSize, string>;
  shapes: Record<InputShape, string>;
  borderSizes: Record<InputSize, string>;
  backgroundColors: Record<InputColor, string>;
} = {
  // TODO: 디자인 시스템이 확정되면 변경될 CSS 값들
  base: "placeholder:text-gray-60 border focus:outline-none caret-purple-main1",
  sizes: {
    xs: "min-h-[51px] py-[11px] px-[25px] min-w-[655px] max-w-[655px] border-purple-main1", // 답글
    md: "min-h-[40px] py-[6px] px-[21px] min-w-[707px] border-purple-main1 placeholder:-translate-y-[-1px]", // 서비스 링크
    lg: "min-h-[48px] py-[12px] px-[22px] min-w-[708px] placeholder:-translate-y-[-1px]", // 링크
    xl: "min-h-[40px] max-h-[50px] py-[10px] ps-[45px] pe-[30px] min-w-[1072px] border-purple-main1", // 검색
  },
  textSizes: {
    xs: "text-body2",
    md: "text-body1",
    lg: "text-h2",
    xl: "",
  },
  shapes: {
    smallRounded: "rounded-[20px]",
    rounded: "rounded-[30px]",
  },
  borderSizes: {
    xs: "border-0",
    md: "border-1",
    lg: "border-[1.5px]",
    xl: "",
  },
  backgroundColors: {
    purple: "bg-purple-main5",
    white: "bg-white",
  },
};

const PurpleInput = forwardRef<HTMLInputElement, PropsWithChildren<InputProps>>(
  (props, ref) => {
    const {
      onChange,
      placeholder,
      onKeyDown,
      defaultValue = "",
      size,
      textSize,
      shape,
      borderSize,
      backgroundColors,
      className,
      search,
    } = props;

    const [value, setValue] = useState(defaultValue);

    return (
      <div className="relative">
        {search && (
          <SearchIcon
            className="absolute top-[12px] left-[18px] text-gray-60"
            sx={{ fontSize: 26.1 }}
          />
        )}
        <input
          type="text"
          value={value}
          onChange={(e) => {
            onChange?.(e);
            setValue(e.target.value);
          }}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
          ref={ref}
          className={clsx(
            className,
            style.textSizes[textSize],
            style.base,
            style.shapes[shape],
            style.sizes[size],
            style.borderSizes[borderSize],
            style.backgroundColors[backgroundColors]
          )}
        />
      </div>
    );
  }
);

PurpleInput.displayName = "PurpleInput";

export default PurpleInput;
