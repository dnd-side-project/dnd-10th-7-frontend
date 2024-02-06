import clsx from "clsx";
import { TextareaProps, TextareaSize, TextareaColor } from ".";

const style: {
    base: string;
    sizes: Record<TextareaSize, string>;
    borderSizes: Record<TextareaSize, string>;
    backgroundColors: Record<TextareaColor, string>;
    borderColors: Record<TextareaColor, string>;
    textSizes: Record<TextareaSize, string>;
} = {
    // TODO: 디자인 시스템이 확정되면 수정할 예정입니다. 
    // 1. placeholder 패딩
    // 2. width
    base: "min-w-[707px] max-w-[707px] placeholder:text-gray-60 border border-purple-main1 focus:outline-none caret-purple-main1 rounded-[10px] resize-none",
    sizes: {
        xs: 'min-h-[104px] px-[17px] py-[21px]',
        md: 'min-h-[214px] px-[27px] py-[28px]',
        lg: 'min-h-[773px] px-[27px] py-[28px]',
        xl: 'min-w-[728px] max-w-[728px] px-[24px] py-[12px]'     // 댓글
    },
    borderSizes: {
        xs: 'border-0',
        md: 'border-1',
        lg: 'border-[1.5px]',
        xl: 'border-2'
    },
    backgroundColors: {
        white: 'bg-white',
        purple1: '',
        purple5: 'bg-purple-main5',
    },
    borderColors: {
        white: '',
        purple1: 'border-purple-main1',
        purple5: '',
    },
    textSizes: {
        xs: 'text-body2',
        md: 'text-body1',
        lg: 'text-h2',
        xl: ''
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
    textSize,
}: TextareaProps) => {

    return (
        <div className={`relative ${size === 'xl' ? 'max-w-[728px]' : 'max-w-[707px]'}`} >
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
                        style.borderColors,
                        style.textSizes[textSize]
                    )
                }
            />
            <div className="absolute bottom-[15px] right-[20px] text-gray-60">({value.length}/{entire})</div>
        </div>
    )
}

export default PurpleTextarea;