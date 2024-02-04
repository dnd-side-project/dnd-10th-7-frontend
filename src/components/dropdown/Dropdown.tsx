import clsx from "clsx";
import { DropdwonProps, DropdownSize, DropdownPlace } from ".";
import { useState } from "react";

const style: {
    base: string;
    sizes: Record<DropdownSize, string>;
    textSizes: Record<DropdownSize, string>;
    place: Record<DropdownPlace, string>;
    py: Record<DropdownSize, string>;
} = {
    base: "rounded-[10px] border border-1 border-gray-40 text-gray-80",
    sizes: {
        xs: 'max-w-[87px]',
        md: 'max-w-[210px]',
        lg: 'max-w-[409px]'
    },
    textSizes: {
        xs: 'text-body2',
        md: 'text-body1',
        lg: '',

    },
    place: {
        left: 'ps-[20px]',
        center: 'flex justify-center',
    },
    py: {
        xs: 'py-[8px]',
        md: 'py-[12px]',
        lg: 'py-[13.5px]'
    }
}

const Dropdown = ({
    items,
    selectedItem,
    setSelectedItem,

    // style
    size,
    textSize,
    place,
    padding
}: DropdwonProps) => {
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    return (
        <div className={clsx(style.base, style.sizes[size])}>
            {items.map((item, index) => (
                <div
                    key={index}
                    onClick={() => setSelectedItem(item)}
                    onMouseEnter={() => setHoveredItem(item)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className={clsx(
                        selectedItem === item && 'bg-purple-main5 text-purple-main1',
                        hoveredItem === item && 'bg-purple-main5',
                        index === 0 && 'rounded-t-[10px]', // 첫 번째 항목에 rounded-t-lg 클래스 추가
                        index === items.length - 1 && 'rounded-b-[10px]', // 마지막 항목에 rounded-b-lg 클래스 추가
                        'transition duration-100 ease-in-out cursor-pointer',
                        style.textSizes[textSize],
                        style.place[place],
                        style.py[padding]
                )}
                >
                {item}
                </div>
            ))}
        </div>
    )
}

export default Dropdown;