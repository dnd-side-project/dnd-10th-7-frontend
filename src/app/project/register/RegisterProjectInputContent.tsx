import RegisterProjectTitle from "./RegisterProjectTitle";
import PurpleTextarea from "@component/components/common-components/textarea/Textarea";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import { InputContentProps } from "@component/types/Project";

const RegisterProjectInputContent = ({
  content,
  handleContentChange,
  contentRef,
  contentInvalid,
  submitClicked,
}: InputContentProps) => {
  return (
    <>
      {/* 본문 */}
      <div className="mt-[74px]">
        <div className="flex items-center">
          <RegisterProjectTitle title="소개" />
          {contentInvalid && (
            <div className="text-error-main text-body3 mb-4 ms-4">
              필수 입력해주세요
            </div>
          )}
        </div>
        <div className="flex">
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
            className={
              contentInvalid ? "border-error-main" : "border-purple-main1"
            }
          />

          <div className="w-[306px] h-[285px] bg-purple-main4 rounded-[5px] text-body3 relative ms-[67px]">
            <CheckCircleOutlineRoundedIcon className="text-purple-main1 w-[14px] h-[14px] absolute left-[18px] top-4" />
            <div className="py-4 ps-[42px] pe-6">
              어떤 프로젝트인지 이해하기 쉽도록 명확하고 간결하게 요약해주세요.
              <br />
              <br />
              소개에는 이런 내용이 있으면 좋아요
              <br />
              <br />
              * 어떤 프로젝트인지
              <br />
              * 프로젝트를 기획한 배경
              <br />
              * 프로젝트의 목적이나 달성하고 싶은 목표
              <br />
              * 프로젝트 진행 방식
              <br />
              <br />
              이미 진행 중인 프로젝트라면, <br /> 진행 상황을 알려주세요!
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterProjectInputContent;
