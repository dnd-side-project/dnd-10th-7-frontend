// 테스트 페이지 입니다
'use client'

import { useState } from "react";
import PurpleInput from "@component/components/input/Input";
import PurpleTextarea from "@component/components/textarea/Textarea";

const Test = () => {
    const [inputValue, setInputValue] = useState<string>("");
    const [textareaValue, setTextareaValue] = useState<string>("");
    const handleChange = (event: any) => {
        setInputValue(event.target.value);
      };
    const handleEnterKey = (event: any) => {
    if (event.key === 'Enter') {
        // 엔터 키를 눌렀을 때의 동작

        // 입력 내용 초기화
        setInputValue("");
    }};

    const textHandleChange = (event: any) => {
        setTextareaValue(event.target.value);
      };
      
    return (
        <div className="p-4">
            <PurpleInput
                value={inputValue}
                onChange={handleChange}
                placeholder="답글을 입력해주세요"
                shape="rounded"
                size="xs"
                textSize="xs"
                borderSize="xs"
                backgroundColors="purple"
            />
            <br />
            <PurpleInput
                value={inputValue}
                onChange={handleChange}
                onKeyDown={handleEnterKey}
                placeholder="관심있는 키워드로 프로젝트를 찾아보세요!"
                shape="square"
                size="lg"
                textSize="md"
                borderSize="md"
                backgroundColors="white"
                search={true}
            />
            <br />
            <PurpleInput
                value={inputValue}
                onChange={handleChange}
                placeholder="서비스 링크 입력하기"
                shape="rounded"
                size="xs"
                textSize="xs"
                borderSize="lg"
                backgroundColors="white"
            />
            <br />
            <br />
            <PurpleTextarea
                value={textareaValue}
                onChange={textHandleChange}
                placeholder="50자 이내의 프로젝트 한 줄 요약을 입력해주세요."
                size="xs"
                backgroundColors="purple5"
                borderColor="purple1"
                borderSize="xs"
                entire={50}
            />
            <br />
            <PurpleTextarea
                value={textareaValue}
                onChange={textHandleChange}
                placeholder={`어떤 프로젝트인지 이해하기 쉽도록 명확하고 간결하게 요약해주세요. 
                            \n 소개에는 이런 내용이 있으면 좋아요`}
                size="md"
                borderSize="md"
                entire={500}
                backgroundColors="white"
                borderColor="purple1"
            />
            <br />
            <PurpleTextarea
                value={textareaValue}
                onChange={textHandleChange}
                placeholder="50자 이내의 프로젝트 한 줄 요약을 입력해주세요."
                size="lg"
                borderColor="purple2"
                borderSize="md"
                backgroundColors="white"
                entire={500}
            />
            <p>{textareaValue}</p>
        </div>
    )
}

export default Test;