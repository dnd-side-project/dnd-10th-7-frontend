import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import PurpleTextarea from '@component/components/common-components/textarea/Textarea';

type InputProps = {
    titleValue: string;     // 제목
    onTitleChange: any;
    subTitleValue: string;  // 부제목
    onSubTitleChange: any;
    selectedOption: string;
    handleCheckBoxChange: any;
}

const RegisterProjectInput = ({
    titleValue,
    onTitleChange,
    subTitleValue,
    onSubTitleChange,
    selectedOption,
    handleCheckBoxChange
}: InputProps) => {

    // 분야
    const options = ['예술/대중문화', '금융/핀테크', '환경', '교육', '건강', 'AI/머신러닝', '취미/실용', '게임', '기타']; 

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
                className='border-purple-main1 mb-[74px]'        
                // className={isInvalid ? 'border-error-main' : 'border-purple-main1'}
            />

            {/* 분야 */}
            <div>
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
        </>
    )
}

export default RegisterProjectInput;