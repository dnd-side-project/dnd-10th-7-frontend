// 테스트 페이지 입니다
'use client'

import { useState } from "react";

import Input from "@component/components/input/Input"

const test = () => {
    const [inputValue, setInputValue] = useState<string>("");
    const handleChange = (event: any) => {
        setInputValue(event.target.value);
      };
    return (
        <div className="p-4">
            <Input
                value={inputValue}
                onChange={handleChange}
                placeholder="서비스 링크 입력하기"
                shape="rounded"
                size="xs"
                textSize="xs"
            />
            <br />
            <Input
                value={inputValue}
                onChange={handleChange}
                placeholder="링크를 입력하세요"
                shape="square"
                size="lg"
                textSize="md"
            />
            <p>입력된 값: {inputValue}</p>
        </div>
    )
}

export default test;