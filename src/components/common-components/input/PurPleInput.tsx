import clsx from "clsx";
import { InputProps, InputSize, InputShape, InputColor } from ".";
import SearchIcon from "@mui/icons-material/Search";
import { forwardRef, PropsWithChildren } from "react";

const style: {
  base: string;
  sizes: Record<InputSize, string>;
  textSizes: Record<InputSize, string>;
  shapes: Record<InputShape, string>;
  borderSizes: Record<InputSize, string>;
  backgroundColors: Record<InputColor, string>;
} = {
  // TODO: 디자인 시스템이 확정되면 변경될 CSS 값들
  base: "placeholder:text-gray-60 border border-purple-main1 focus:outline-none caret-purple-main1",
  sizes: {
    xs: "min-h-[51px] py-[11px] px-[25px] min-w-[655px] max-w-[655px]", // 답글
    md: "min-h-[40px] py-[6px] px-[21px] min-w-[707px] placeholder:-translate-y-[-1px]", // 서비스 링크
    lg: "min-h-[48px] py-[12px] px-[22px] min-w-[708px] placeholder:-translate-y-[-1px]", // 링크
    xl: "min-h-[40px] max-h-[40px] py-[10px] ps-[45px] min-w-[1072px]", // 검색
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
      value,
      onChange,
      placeholder,
      onKeyDown,

      // style
      size,
      textSize,
      shape,
      borderSize,
      backgroundColors,
      className,

      // icon
      search,
    } = props;

    return (
      <div className="flex items-center">
        {search && (
          <SearchIcon
            className="absolute top-[7px] left-[18px] text-gray-60"
            sx={{ fontSize: 26.1 }}
          />
        )}
        <input
          type="text"
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
          ref={ref}
          className={clsx(
            style.textSizes[textSize],
            style.base,
            style.shapes[shape],
            style.sizes[size],
            style.borderSizes[borderSize],
            style.backgroundColors[backgroundColors],
            className
          )}
        ></input>
      </div>
    );
  }
);

PurpleInput.displayName = "PurpleInput";

export default PurpleInput;
