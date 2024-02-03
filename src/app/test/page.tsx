// 테스트 페이지 입니다
'use client'

import { useState } from "react";
import PurPleInput from "@component/components/input/Input";

const Test = () => {
    const [inputValue, setInputValue] = useState<string>("");
    const handleChange = (event: any) => {
        setInputValue(event.target.value);
      };
    const handleEnterKey = (event: any) => {
    if (event.key === 'Enter') {
        // 엔터 키를 눌렀을 때의 동작

        // 입력 내용 초기화
        setInputValue("");
    }
    };
    return (
        <div className="p-4">
            <PurPleInput
                value={inputValue}
                onChange={handleChange}
                onKeyDown={handleEnterKey}
                placeholder="답글을 입력해주세요"
                shape="rounded"
                size="xs"
                textSize="xs"
                borderSize="xs"
                backgroundColors="purple"
            />
            <br />
            <PurPleInput
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
            <PurPleInput
                value={inputValue}
                onChange={handleChange}
                onKeyDown={handleEnterKey}
                placeholder="서비스 링크 입력하기"
                shape="rounded"
                size="xs"
                textSize="xs"
                borderSize="lg"
                backgroundColors="white"
            />
            <p>입력된 값: {inputValue}</p>
        </div>
    )
}

export default Test;