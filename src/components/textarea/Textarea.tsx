'use client'
import clsx from "clsx";
import { TextareaProps, TextareaSize, TextareaColor } from ".";
import { useEffect, useState } from "react";

const style: {
    base: string;
    sizes: Record<TextareaSize, string>;
    borderSizes: Record<TextareaSize, string>;
    backgroundColors: Record<TextareaColor, string>;
    borderColors: Record<TextareaColor, string>;
} = {
    // TODO: 디자인 시스템이 확정되면 수정할 예정입니다.
    base: "min-w-[707px] placeholder:text-gray-60 border border-purple-main1 focus:outline-none caret-purple-main1 rounded-[10px] resize-none",
    sizes: {
        xs: 'min-h-[104px] px-[17px] py-[21px]',
        md: 'min-h-[214px] px-[17px] py-[21px]',
        lg: 'min-h-[773px] px-[17px] py-[21px]',
    },
    borderSizes: {
        xs: 'border-0',
        md: 'border-1',
        lg: 'border-2',
    },
    backgroundColors: {
        white: 'bg-white',
        purple1: 'bg-purple-main1',
        purple2: 'bg-purple-main2',
        purple5: 'bg-purple-main5',
    },
    borderColors: {
        white: '',
        purple1: 'border-purple-main1',
        purple2: 'border-purple-main2',
        purple5: 'border-purple-main5',
    }
}

export const PurpleTextarea = ({
    value,
    onChange,
    placeholder,
    entire,

    // style
    size,
    borderSize,
    backgroundColors,
}: TextareaProps) => {
    
    // 글자 수
    const [valueCount, setValueCount] = useState<number>(value.length);

    useEffect(() => {
        setValueCount(value.length);
    }, [value])

    return (
        <div className="relative">
            <textarea 
                name={value} 
                onChange={onChange}
                placeholder={placeholder}
                id="" 
                className={
                    clsx(
                        style.base,
                        style.sizes[size],
                        style.backgroundColors[backgroundColors],
                        style.borderSizes[borderSize],
                        style.borderColors
                    )
                }
            />
            <div className="absolute bottom-[15px] left-[640px] font-bold text-gray-60">({valueCount}/{entire})</div>
        </div>
    )
}

export default PurpleTextarea;
