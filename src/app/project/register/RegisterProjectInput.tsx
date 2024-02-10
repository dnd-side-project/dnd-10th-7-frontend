'use client'

import { useState } from 'react';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import PurpleTextarea from '@component/components/common-components/textarea/Textarea';
import Dropdown from '@component/components/common-components/dropdown/Dropdown';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

type InputProps = {
    titleValue: string;     // 제목
    onTitleChange: any;
    subTitleValue: string;  // 부제목
    onSubTitleChange: any;
    selectedOption: string;
    handleCheckBoxChange: any;
    selectedProgress: string;
    handleProgressCheckBoxChange: any;
    frontMember: string;
    setFrontMember: any;
    backMember: string;
    setBackMember: any;
    designMember: string;
    setDesignMember: any;
    pmMember: string;
    setPMMember: any
}

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
            <PurpleTextarea
                value={subTitleValue}
                onChange={onSubTitleChange}
                placeholder="50자 이내의 프로젝트 한 줄 요약을 입력해주세요."
                size="xs"   
                backgroundColors="white"  
                borderSize="lg"     
                textSize="md"      
                entire={50} 
                className='border-purple-main1'        
                // className={isInvalid ? 'border-error-main' : 'border-purple-main1'}
            />

            {/* 분야 */}
            <div className='mb-[74.5px]  mt-[74px]'>
                <div className='text-title mb-[16px]'>분야</div>
                <div className='text-body2 text-gray-60 mb-[18.5px]'>1개 이하의 분야를 선택해주세요.</div>
                <div className='flex'>
                {options.map((option) => (
                    <div key={option} className='flex items-center me-8'>
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
                    <div>{option}</div>
                    </div>
                ))}
                </div>
            </div>

            {/* 진행도 */}
            <div>
                <div className='text-title mb-[16px]'>진행도</div>
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
                    <div>{option}</div>
                    </div>
                ))}
                </div>

                {/* 멤버 */}
                <div className='mt-[74px]'>
                    <div className='text-title mb-[16px]'>멤버</div>
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
            </div>
        </>
    )
}

export default RegisterProjectInput;