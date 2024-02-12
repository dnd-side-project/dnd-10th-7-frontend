import clsx from "clsx";
import { DropdownSize, DropdownPlace, DropdownProps } from ".";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const style: {
  base: string;
  sizes: Record<DropdownSize, string>;
  textSizes: Record<DropdownSize, string>;
  place: Record<DropdownPlace, string>;
  py: Record<DropdownSize, string>;
} = {
  base: "w-full mt-2 rounded-[10px] border border-1 border-gray-40 text-gray-80 bg-white",
  sizes: {
    xs: "min-w-[87px] max-w-[87px]", // 반응형 X
    md: "min-w-[210px] max-w-[210px]",
    lg: "w-full",
    // lg: "min-w-[409px] max-w-[409px]",
  },
  textSizes: {
    xs: "text-body2",
    md: "text-body1",
    lg: "",
  },
  place: {
    left: "ps-[20px]",
    center: "flex justify-center",
  },
  py: {
    xs: "py-[8px]",
    md: "py-[12px]",
    lg: "py-[13.5px]",
  },
};

const Dropdown = ({
  items,
  selectedItem,
  setSelectedItem,

  // style
  size,
  textSize,
  place,
  padding,
}: DropdownProps) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>();

  return (
    <div
      className={clsx(
        "bg-gray-10 w-full rounded-md text-h2 caret-purple-main1 min-w-[87px] border border-1 border-gray-10"
      )}
      onClick={() => setIsOpenMenu(!isOpenMenu)}
    >
      <div
        className={clsx(
          isOpenMenu && "border rounded-md border-purple-main1",
          "flex items-center justify-center gap-4 h-[50px] w-full cursor-pointer text-gray-60"
        )}
      >
        <p className="">{selectedItem ? selectedItem : items[0]}</p>
        <p className="flex justify-center items-center">
          {isOpenMenu ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </p>
      </div>

      <div>
        {isOpenMenu && (
          <div className={clsx(style.base, style.sizes[size])}>
            {items.map((item, index) => (
              <div
                key={index}
                onClick={() => setSelectedItem(item)}
                onMouseEnter={() => setHoveredItem(item)}
                onMouseLeave={() => setHoveredItem(null)}
                className={clsx(
                  selectedItem === item && "bg-purple-main5 text-purple-main1",
                  hoveredItem === item && "bg-purple-main5",
                  index === 0 && "rounded-t-[10px]", // 첫 번째 항목에 rounded-t-lg 클래스 추가
                  index === items.length - 1 && "rounded-b-[10px]", // 마지막 항목에 rounded-b-lg 클래스 추가
                  "transition duration-100 ease-in-out cursor-pointer",
                  style.textSizes[textSize],
                  style.place[place],
                  style.py[padding]
                )}
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
