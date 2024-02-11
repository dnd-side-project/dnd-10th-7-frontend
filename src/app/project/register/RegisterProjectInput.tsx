'use client'

import { useState, useEffect } from 'react';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import PurpleTextarea from '@component/components/common-components/textarea/Textarea';
import Dropdown from '@component/components/common-components/dropdown/Dropdown';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import RegisterProjectTitle from './\bRegisterProjectTitle';
import PurpleInput from '@component/components/common-components/input/PurPleInput';
import Button from '@component/components/common-components/button/Button';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import Calendar from './Callendar';
import { InputProps } from '@component/types/Project';

type TeamItem = {
    title: string;
    state: boolean;
    member: string;
    handleDropdownItemClick: any
    setMember: (member: string) => void;
    setShowDropdown: (state: boolean) => void;
};

const RegisterProjectInput = ({
    titleValue,
    onTitleChange,
    subTitleValue,
    onSubTitleChange,
    selectedOption,
    handleCheckBoxChange,
    selectedProgress,
    handleProgressCheckBoxChange,
    frontMember,
    setFrontMember,
    backMember,
    setBackMember,
    designMember,
    setDesignMember,
    pmMember,
    setPMMember,
    content,
    handleContentChange,
    serviceLink,
    handleServiceLinkChange,
    startDate,
    setStartDate,
    startIndex,
    setStartIndex,
    endDate,
    setEndDate,
    endIndex,
    setEndIndex,

    subTitleRef,
    subTitleInvalid,
    contentRef,
    contentInvalid,
    submitClicked
}: InputProps) => {

    // 분야
    const options = ['예술/대중문화', '금융/핀테크', '환경', '교육', '건강', 'AI/머신러닝', '취미/실용', '게임', '기타']; 

    // 진행도
    const progress = ['기획중', '개발중', '리팩토링중']

    // 드롭다운
    const range: string[] = ['0명', '1명', '2명', '3명', '4명', '5명', '6명', '7명', '8명', '9명'];
    const [showFrontDropdown, setShowFrontDropdown] = useState<boolean>(false);
    const handleFrontDropdownItemClick = (item: any) => {
        setShowFrontDropdown(!showFrontDropdown)
    }
    const [showBackDropdown, setShowBackDropdown] = useState<boolean>(false);
    const handleBackDropdownItemClick = (item: any) => {
        setShowBackDropdown(!showBackDropdown)
    }
    const [showDesignDropdown, setShowDesignDropdown] = useState<boolean>(false);
    const handleDesignDropdownItemClick = (item: any) => {
        setShowDesignDropdown(!showDesignDropdown)
    }
    const [showPmDropdown, setShowPmDropdown] = useState<boolean>(false);
    const handlePmDropdownItemClick = (item: any) => {
        setShowPmDropdown(!showBackDropdown)
    }

    const teams: TeamItem[] = [
        { title: '프론트엔드', state: showFrontDropdown, member: frontMember, handleDropdownItemClick: handleFrontDropdownItemClick, setMember: setFrontMember, setShowDropdown: setShowFrontDropdown },
        { title: '백엔드', state: showBackDropdown, member: backMember, handleDropdownItemClick: handleBackDropdownItemClick, setMember: setBackMember, setShowDropdown: setShowBackDropdown },
        { title: '디자인', state: showDesignDropdown, member: designMember, handleDropdownItemClick: handleDesignDropdownItemClick, setMember: setDesignMember, setShowDropdown: setShowDesignDropdown },
        { title: '기획', state: showPmDropdown, member: pmMember, handleDropdownItemClick: handlePmDropdownItemClick, setMember: setPMMember, setShowDropdown: setShowPmDropdown }
    ];

    useEffect(() => {
        console.log(endDate)
    }, [endDate])


    return (
        <>
            {/* 제목 */}
            <div className="flex items-center mb-[40px]">
                <input 
                    type="text" 
                    value={titleValue} 
                    onChange={onTitleChange}
                    placeholder="제목을 입력하세요"
                    className="text-head w-[707px] focus:outline-none caret-purple-main1"
                />
                <div className="w-[306px] h-[80px] bg-purple-main4 rounded-[5px] text-body3 relative ms-[67px]">
                    <CheckCircleOutlineRoundedIcon className='text-purple-main1 w-[16.8px] h-[16.8px] absolute left-[18px] top-[18.5px]' />
                    <div className='py-4 px-[42px]'>
                        제목은 프로젝트를 직관적으로 알 수 있게 작성해주세요. (30자 이내)
                    </div>
                </div>
            </div>

            {/* 부제 */}
            {subTitleInvalid && (
                <div className='absolute text-error-main mt-[-35px] text-body3'>필수 입력해주세요</div>
            )}
            <PurpleTextarea
                value={subTitleValue}
                onChange={onSubTitleChange}
                placeholder="50자 이내의 프로젝트 한 줄 요약을 입력해주세요."
                size="xs"   
                backgroundColors="white"  
                borderSize="lg"     
                textSize="md"      
                entire={50}   
                ref={subTitleRef}    
                className={`${subTitleInvalid ? 'border-error-main' : 'border-purple-main1'} relative`}
            />

            {/* 분야 */}
            <div className='mb-[74.5px]  mt-[74px]'>
                <div className='flex items-center'>
                    <RegisterProjectTitle title="분야" />
                    {!selectedOption && submitClicked && (
                            <div className='text-error-main text-body3 mb-4 ms-4'>필수 입력해주세요</div>
                    )}
                </div>
                <div className='text-body2 text-gray-60 mb-[18.5px]'>1개 이하의 분야를 선택해주세요.</div>
                <div className='flex'>
                {options.map((option) => (
                    <div key={option} className='flex items-center me-7'>
                    <input
                        type='checkbox'
                        id={option}
                        className='hidden'
                        checked={selectedOption === option}
                        onChange={() => handleCheckBoxChange(option)}
                    />
                    <label
                        htmlFor={option}
                        className={`w-5 h-5 border border-1 rounded-[3px] ${
                        selectedOption === option ? 'bg-purple-main1' : 'border-gray-40'
                        } me-2 cursor-pointer`}
                    >    
                    </label>
                    <div className='text-h2'>{option}</div>
                    </div>
                ))}
                </div>
            </div>

            {/* 진행도 */}
            <div>
                <div className='flex items-center'>
                    <RegisterProjectTitle title="진행도" />
                    {!selectedProgress && submitClicked && (
                            <div className='text-error-main text-body3 mb-4 ms-4'>필수 입력해주세요</div>
                    )}
                </div>
                <div className='flex'>
                {progress.map((option) => (
                    <div key={option} className='flex items-center me-8'>
                    <input
                        type='checkbox'
                        id={option}
                        className='hidden'
                        checked={selectedProgress === option}
                        onChange={() => handleProgressCheckBoxChange(option)}
                    />
                    <label
                        htmlFor={option}
                        className={`w-5 h-5 border border-1 rounded-[3px] ${
                            selectedProgress === option ? 'bg-purple-main1' : 'border-gray-40'
                        } me-2 cursor-pointer`}
                    >    
                    </label>
                    <div className='text-h2'>{option}</div>
                    </div>
                ))}
                </div>

                {/* 멤버 */}
                <div className='mt-[74px]'>
                    <div className='flex items-center'>
                        <RegisterProjectTitle title="멤버" />
                        {frontMember === "0명" && backMember === "0명" && designMember === "0명" && pmMember === "0명" && submitClicked && (
                            <div className='text-error-main text-body3 mb-4 ms-4'>필수 입력해주세요</div>
                        )}
                    </div>
                    <div className='flex'>
                        {teams.map((team, index) => (
                            <div key={index} className='flex'>
                                <p className='me-4 text-h2'>{team.title}</p>
                                <div className='me-8'>
                                <div className='w-[86px] mb-[13px] h-8 border border-1 border-gray-60 rounded-[5px] text-gray-80 text-h2 flex items-center py-2 px-2 relative'>
                                    <KeyboardArrowDownRoundedIcon className='text-gray-60 w-6 h-6' onClick={team.handleDropdownItemClick} />
                                    <span className='ms-1'>{team.member}</span>
                                </div>
                                {team.state && (
                                    <div className='absolute'>
                                    <Dropdown
                                        size="xs"
                                        items={range}
                                        selectedItem={team.member}
                                        setSelectedItem={(selectedItem) => {
                                        team.setMember(selectedItem)
                                        team.setShowDropdown(false)
                                        }}
                                        textSize="xs"
                                        place="center"
                                        padding="xs"
                                    />
                                    </div>
                                )}
                                </div>
                            </div>
                        ))}
                    </div> 
                </div>

                {/* 기간 */}
                <div className='mt-[74px]'>
                    <RegisterProjectTitle title="기간" />
                    <div className='bg-purple-main5 max-w-[358px] min-h-[249px] max-h-[259px] rounded-[10px]'>
                        <div className='flex'>
                            {/* 시작하는 날 */}
                            <Calendar clickedIndex={startIndex} setClickedIndex={setStartIndex} clickedDate={startDate} setClickedDate={setStartDate} />
                            {/* 끝나는 날 */}
                            <Calendar clickedIndex={endIndex} setClickedIndex={setEndIndex} clickedDate={endDate} setClickedDate={setEndDate} />
                        </div>
                        <hr className='w-[316px] text-gray-60 mx-auto mt-[-15px]' />
                        {startDate && (
                            <div className='text-caption1 ms-5 flex mt-4'>
                                {startDate}
                                {endDate && (
                                    <> - {endDate}</>
                                )}
                            </div>
                        )}
                    </div>      
                </div>

                {/* 본문 */}
                <div className='mt-[74px]'>
                    <div className='flex items-center'>
                        <RegisterProjectTitle title="소개" />
                        {contentInvalid && (
                            <div className='text-error-main text-body3 mb-4 ms-4'>필수 입력해주세요</div>
                        )}
                    </div>
                    <div className='flex'>
                        <PurpleTextarea
                            value={content}
                            onChange={handleContentChange}
                            placeholder={`어떤 프로젝트인지 이해하기 쉽도록 명확하고 간결하게 요약해주세요. 
                            \n\n소개에는 이런내용이 있으면 좋아요.
                            \n\n* 어떤 프로젝트인지\n* 프로젝트를 기획한 배경\n* 프로젝트의 목적이나 달성하고 싶은 목표\n* 프로젝트 진행 방식
                            \n\n이미 진행 중인 프로젝트라면\n진행 상황을 알려주세요!`}
                            size="lg"   
                            backgroundColors="white"    
                            borderSize="lg"     
                            textSize="md"       
                            entire={500}  
                            ref={contentRef}
                            className={contentInvalid ? 'border-error-main' : 'border-purple-main1'}       
                        />
                        
                        <div className="w-[306px] h-[320px] bg-purple-main4 rounded-[5px] text-body3 relative ms-[67px]">
                            <CheckCircleOutlineRoundedIcon className='text-purple-main1 w-[16.8px] h-[16.8px] absolute left-[18px] top-[18.5px]' />
                            <div className='py-4 ps-[42px] pe-4'>
                                어떤 프로젝트인지 이해하기 쉽도록 명확하고 간결하게 요약해주세요.
                                <br /><br />
                                소개에는 이런 내용이 있으면 좋아요<br /><br />          
                                * 어떤 프로젝트인지<br />
                                * 프로젝트를 기획한 배경<br />
                                * 프로젝트의 목적이나 달성하고 싶은 목표<br />
                                * 프로젝트 진행 방식<br /><br />
                                이미 진행 중인 프로젝트라면, <br/> 진행 상황을 알려주세요!
                            </div>
                        </div>
                    </div>
                </div>

                {/* 서비스 링크 입력하기 */}
                <PurpleInput
                    value={serviceLink}
                    onChange={handleServiceLinkChange}
                    placeholder="서비스 링크 입력하기"
                    shape="rounded"
                    size="md"
                    textSize="md"
                    borderSize="lg"
                    backgroundColors="white"
                    className='mt-6 mb-7'
                />

                {/* 사진 등록하기 */}
                <Button className='flex items-center gap-2'>
                    <AddCircleOutlineOutlinedIcon className='text-purple-main5' />
                    사진 등록하기
                </Button>

            </div>
        </>
    )
}

export default RegisterProjectInput;