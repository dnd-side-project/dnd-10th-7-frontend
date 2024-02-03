// 테스트 페이지 입니다
'use client'

import { useState } from "react";
import PurpleInput from "@component/components/input/Input";
import PurpleTextarea from "@component/components/textarea/Textarea";
import Tab from "@component/components/tab/Tab";
import Dropdown from "@component/components/dropdown/Dropdown";

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

    // 드롭다운
    const [selectedItem, setSelectedItem] = useState<string>("");
    return (
        <div className="p-4">

            {/* 탭 컴포넌트 입니다 */}
            <div className="text-head text-purple-main1">TAB</div>
            <div className="flex">
                <Tab content="예술/대중문화"/>
                <Tab content="환경"/>
                <Tab content="건강"/>
                <Tab content="취미/실용"/>
            </div>
            <div className="flex">
                <Tab content="금융/핀테크"/>
                <Tab content="교육"/>
                <Tab content="게임"/>
                <Tab content="AI/머신러닝"/>
            </div>
            <br /><br />

            {/* 인풋 컴포넌트 입니다 */}
            <div className="text-head text-purple-main1">INPUT</div>
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

            {/* 텍스트 컴포넌트 입니다 */}
            <div className="text-head text-purple-main1">TEXTAREA</div>
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
                            \n소개에는 이런 내용이 있으면 좋아요`}
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
            <br /><br />

            {/* 드롭다운 컴포넌트 입니다 */}
            <div className="text-head text-purple-main1">DROPDOWN</div>
            <p className="text-purple-main2">{selectedItem}선택함</p>
            
            <Dropdown
                size="lg"
                items={['디자이너', '기획자', '프론트엔드', '백엔드']} // 드롭다운 항목
                selectedItem={selectedItem} // 선택
                setSelectedItem={setSelectedItem} 
                textSize="md"   // 글자 크기
                place="center"  // 글자 위치
                padding="md"    // py 크기
            />
            <br />
            <Dropdown
                size="md"
                items={['끌올하기', '수정하기', '삭제하기']}
                selectedItem={selectedItem}
                setSelectedItem={setSelectedItem}
                textSize="md"
                place="left"
                padding="lg"
            />
            <br />
            <Dropdown
                size="xs"
                items={['0명', '1명', '2명', '3명', '4명', '5명', '6명', '7명', '8명', '9명']}
                selectedItem={selectedItem}
                setSelectedItem={setSelectedItem}
                textSize="xs"
                place="center"
                padding="xs"
            />
            <br />
        </div>
    )
}

export default Test;