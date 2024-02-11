'use client'
import { useState, useRef, useEffect } from "react";

import RegisterProjectTop from "./RegisterProjectTop"
import RegisterProjectInput from "./RegisterProjectInput"
import Button from "@component/components/common-components/button/Button";
import Modal from "@component/components/common-components/modal/Modal";


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

    // submit fail 
    const subTitleRef = useRef<HTMLTextAreaElement>(null);
    const [submitClicked, setSubmitClicked] = useState<boolean>(false);

    // submit
    const onSubmit = () => {
        // focust
        if (subTitleRef.current) {
            subTitleRef.current.focus();
        }
        setSubmitClicked(true);
    }
    
    // subTitle Invalid
    const subTitleInvalid = submitClicked && subTitleValue.length === 0;
    
    useEffect(() => {
        if (submitClicked) {
            focus();
        }
    }, [submitClicked]);


    return (
        <div className="w-[1440px] flex flex-col items-center">

            {/* 프로젝트 등록 상단 */}
            <RegisterProjectTop />

            <section className="max-w-[1080px] w-full mt-[135px] border border-1 border-error-main">
                <RegisterProjectInput
                    // for submit
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

                    // submit fail
                    subTitleRef={subTitleRef}
                    subTitleInvalid={subTitleInvalid}
                />

                {/* 제출하기 */}
                <div className='mt-[185px] flex justify-end'>
                    <Button size='lg' color='border' className='py-[14.5px] px-[49.5px] me-5'>
                        임시저장
                    </Button>
                    <Button size='lg' className='py-[14.5px] px-[49.5px]' onClick={onSubmit}>
                        등록하기
                    </Button>
                </div>
            </section>

        </div>
    )
}
