'use client'
import { useState } from "react";

import RegisterProjectTop from "./RegisterProjectTop"
import RegisterProjectInput from "./RegisterProjectInput"


export default function RegisterProject () {

    // title
    const [titleValue, setTitleValue] = useState<string>("");
    const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitleValue(e.target.value)
    }

    //subtitle
    const [subTitleValue, setSubTitleValue] = useState<string>("")
    const onSubTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSubTitleValue(e.target.value)
    }

    // category options
    const [selectedOption, setSelectedOption] = useState<string>("");
    const handleCheckBoxChange = (option: string) => {
        setSelectedOption(option);
    };
    return (
        <div className="w-[1440px] flex flex-col items-center">

            {/* 프로젝트 등록 상단 */}
            <RegisterProjectTop />

            <section className="max-w-[1080px] w-full mt-[135px] border border-1 border-error-main">
                <RegisterProjectInput
                    titleValue={titleValue}
                    onTitleChange={onTitleChange}
                    subTitleValue={subTitleValue}
                    onSubTitleChange={onSubTitleChange}
                    selectedOption={selectedOption}
                    handleCheckBoxChange={handleCheckBoxChange}
                />
            </section>

        </div>
    )
}
