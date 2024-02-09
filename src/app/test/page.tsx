// 테스트 페이지 입니다
'use client'

import { useEffect, useState } from "react";
import PurpleInput from "@component/components/input/PurPleInput";
import GrayInput from '@component/components/input/GrayInput';
import PurpleTextarea from "@component/components/textarea/Textarea";
import TabComponent from "@component/components/tab/TabComponent";
import Dropdown from "@component/components/dropdown/Dropdown";
import Button from "@component/components/button/Button";
import { useRef } from "react";

const Test = () => {
    // input
    const [inputValue1, setInputValue1] = useState<string>("");
    const [inputValue2, setInputValue2] = useState<string>("www.sendback.co.kr(이미 input이 입력되어 있는 경우)");
    const handleChange = (event: any) => {
        setInputValue1(event.target.value.replace(/\D/g, ''));
    };
    const handleChange2 = (event: any) => {
        setInputValue2(event.target.value);
    }
    const handleEnterKey = (event: any) => {
    if (event.key === 'Enter') {
        // 엔터 키를 눌렀을 때의 동작

        // 입력 내용 초기화
        setInputValue1("");
    }};

    


    // textarea
    const [textareaValue, setTextareaValue] = useState<string>("");
    const textHandleChange = (event: any) => {
        setTextareaValue(event.target.value);
    };

    // textarea 제출 했을 때 글자수가 0자면 focus-error
    const inputRef = useRef<HTMLTextAreaElement>(null);
    const [submitClicked, setSubmitClicked] = useState<boolean>(false);

    const focus = () => {
        console.log('click')
        console.log('inputRef.current before', inputRef.current)
        if (inputRef.current) {
            console.log('inputRef.current after', inputRef.current)
            inputRef.current.focus();
        }
        setSubmitClicked(true);
    }
    // 클릭했을 때마다 focus 함수를 다시 작동시켜서 rendering 시켜야 inputRef.current 가 null
    useEffect(() => {
        if (submitClicked) {
            focus();
        }
    }, [submitClicked]);


    const isInvalid = submitClicked && textareaValue.length === 0;

    // 드롭다운
    const [selectedItem1, setSelectedItem1] = useState<string>("");
    const [selectedItem2, setSelectedItem2] = useState<string>("");
    const [selectedItem3, setSelectedItem3] = useState<string>("");

    return (
        <div className="p-4">

            {/* 탭 컴포넌트 입니다 */}
            <div className="text-head text-purple-main1">TAB</div>
                <TabComponent/>
            <br /><br />

            {/* 인풋 컴포넌트 입니다 */}
            <div className="text-head text-purple-main1">INPUT</div>
            <PurpleInput
                value={inputValue1}
                onChange={handleChange}
                placeholder="답글을 입력해주세요"
                shape="rounded"    
                size="xs"
                textSize="xs"
                borderSize="xs"     // 테두리 두께
                backgroundColors="purple"
            />
            <br />
            <PurpleInput
                value={inputValue1}
                onChange={handleChange}
                onKeyDown={handleEnterKey}
                placeholder="서비스 링크 입력하기"
                shape="rounded"
                size="md"
                textSize="md"
                borderSize="lg"
                backgroundColors="white"
            />
            <br />
            <PurpleInput
                value={inputValue2}
                onChange={handleChange2}
                onKeyDown={handleEnterKey}
                placeholder="서비스 링크 입력하기"
                shape="rounded"
                size="md"
                textSize="md"
                borderSize="lg"
                backgroundColors="white"
            />
            <br />
            <PurpleInput
                value={inputValue1}
                onChange={handleChange}
                onKeyDown={handleEnterKey}
                placeholder="링크를 입력하세요"
                shape="rounded"
                size="lg"
                textSize="lg"
                borderSize="md"
                backgroundColors="white"
            />
            <br />
            <PurpleInput
                value={inputValue1}
                onChange={handleChange}
                placeholder="관심있는 키워드로 프로젝트를 찾아보세요!"
                shape="smallRounded"
                size="xl"
                textSize="md"
                borderSize="md"
                backgroundColors="white"
                search={true}
            />
            <br />
            <GrayInput
                value={inputValue1}
                onChange={handleChange}
                placeholder="2000.06.24"
                size="xs"
            />
            <br /><br />
            <GrayInput
                value={inputValue1}
                onChange={handleChange}
                placeholder="DND"
                size="md"
            />

            {/* 텍스트 컴포넌트 입니다 */}
            <div className="text-head text-purple-main1">TEXTAREA</div>
            <PurpleTextarea
                value={textareaValue}
                onChange={textHandleChange}
                placeholder="50자 이내의 프로젝트 한 줄 요약을 입력해주세요."
                size="xs"   // 크기
                backgroundColors="white"  // 배경색
                borderSize="lg"     // 테두리 두께
                textSize="md"       // 텍스크 크기
                entire={50}         // 글자수 제한
                className={isInvalid ? 'border-error-main' : 'border-purple-main1'}
            />
            <br />
            <PurpleTextarea
                value={textareaValue}
                onChange={textHandleChange}
                placeholder="따로 지급하실 추가 리워드가 있다면 입력해주세요."
                size="md"   
                backgroundColors="white"   
                borderSize="md"     
                textSize="md"       
                entire={100}  
                className={isInvalid ? 'border-error-main' : 'border-purple-main1'}       
            />
            <br />
            <PurpleTextarea
                value={textareaValue}
                onChange={textHandleChange}
                placeholder="댓글을 입력하세요."
                size="xl"   
                backgroundColors="purple5" 
                borderSize="xs"     
                textSize="xs"       
                entire={100} 
                className={isInvalid ? 'border-error-main' : 'border-purple-main1'}        
            />
            <br />
            <PurpleTextarea
                value={textareaValue}
                onChange={textHandleChange}
                placeholder={`어떤 프로젝트인지 이해하기 쉽도록 명확하고 간결하게 요약해주세요. \n\n\n소개에는 이런내용이 있으면 좋아요.`}
                size="lg"   
                backgroundColors="white"    
                borderSize="lg"     
                textSize="md"       
                entire={500}  
                className={isInvalid ? 'border-error-main' : 'border-purple-main1'}       
            />
            <br />
            <PurpleTextarea
                value={textareaValue}
                onChange={textHandleChange}
                placeholder="피드백 요청 내용을 입력하세요."
                size="lg"   
                backgroundColors="white"     
                borderSize="md"     
                textSize="lg"       
                entire={500}  
                className={isInvalid ? 'border-error-main' : 'border-purple-main1'}       
            />
            <br />
            
            {/* 드롭다운 컴포넌트 입니다 */}
            <div className="text-head text-purple-main1">DROPDOWN</div>
            <p className="text-purple-main2">{selectedItem1}선택함</p>
            <p className="text-purple-main2">{selectedItem2}선택함</p>
            <p className="text-purple-main2">{selectedItem3}선택함</p>
            
            <Dropdown
                size="lg"
                items={['디자이너', '기획자', '프론트엔드', '백엔드']} // 드롭다운 항목
                selectedItem={selectedItem1} // 선택
                setSelectedItem={setSelectedItem1} 
                textSize="lg"   // 글자 크기
                place="center"  // 글자 위치
                padding="md"    // py 크기
            />
            <br />
            <Dropdown
                size="md"
                items={['끌올하기', '수정하기', '삭제하기']}
                selectedItem={selectedItem2}
                setSelectedItem={setSelectedItem2}
                textSize="lg"   
                place="left"
                padding="lg"
            />
            <br />
            <Dropdown
                size="xs"
                items={['0명', '1명', '2명', '3명', '4명', '5명', '6명', '7명', '8명', '9명']}
                selectedItem={selectedItem3}
                setSelectedItem={setSelectedItem3}
                textSize="xs"
                place="center"
                padding="xs"
            />
            <br />




















            {/* button focus */}
            <PurpleTextarea
                value={textareaValue}
                onChange={textHandleChange}
                placeholder="50자 이내의 프로젝트 한 줄 요약을 입력해주세요."
                size="xs"   // 크기
                backgroundColors="white"  // 배경색
                borderSize="lg"     // 테두리 두께
                textSize="md"       // 텍스크 크기
                entire={50}         // 글자수 제한
                ref={inputRef}
                className={isInvalid ? 'border-error-main' : 'border-purple-main1'}
            />
            <Button onClick={focus}>제출하기</Button>

            
        </div>
    )
}

export default Test;