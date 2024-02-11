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

    // progress options
    const [selectedProgress, setSelectedProgress] = useState<string>("");
    const handleProgressCheckBoxChange = (option: string) => {
        setSelectedProgress(option);
    };

    // member
    const [frontMember, setFrontMember] = useState<string>('0명');
    const [backMember, setBackMember] = useState<string>('0명');
    const [designMember, setDesignMember] = useState<string>('0명');
    const [pmMember, setPMMember] = useState<string>('0명');

    // content
    const [content, setContent] = useState<string>("");
    const handleContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(event.target.value);
    };

    // date
    const [startDate, setStartDate] = useState<string>("");
    const [startIndex, setStartIndex] = useState<number>();
    const [endDate, setEndDate] = useState<string>("")
    const [endIndex, setEndIndex] = useState<number>();

    // service link
    const [serviceLink, setServiceLink] = useState<string>("");
    const handleServiceLinkChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setServiceLink(event.target.value);
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
                    selectedProgress={selectedProgress}
                    handleProgressCheckBoxChange={handleProgressCheckBoxChange}
                    frontMember={frontMember}
                    setFrontMember={setFrontMember}
                    backMember={backMember}
                    setBackMember={setBackMember}
                    designMember={designMember}
                    setDesignMember={setDesignMember}
                    pmMember={pmMember}
                    setPMMember={setPMMember}
                    content={content}
                    handleContentChange={handleContentChange}
                    serviceLink={serviceLink}
                    handleServiceLinkChange={handleServiceLinkChange}
                    startDate={startDate}
                    setStartDate={setStartDate}
                    startIndex={startIndex}
                    setStartIndex={setStartIndex}
                    endDate={endDate}
                    setEndDate={setEndDate}
                    endIndex={endIndex}
                    setEndIndex={setEndIndex}
                />
            </section>
        </div>
    )
}
