import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import PurpleTextarea from "@component/components/common-components/textarea/Textarea";
import { InputTitleProps } from "@component/types/Project";

const RegisterProjectInputTitle = ({
  titleValue,
  onTitleChange,
  subTitleValue,
  onSubTitleChange,

  subTitleRef,
  subTitleInvalid,
}: InputTitleProps) => {
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
        <div className="w-[306px] h-[74px] bg-purple-main4 rounded-[5px] text-body3 relative ms-[67px]">
          <CheckCircleOutlineRoundedIcon className="text-purple-main1 w-[14px] h-[14px] absolute left-[18px] top-4" />
          <div className="py-4 ps-[42px] pe-6">
            제목은 프로젝트를 직관적으로 알 수 있게 작성해주세요. (30자 이내)
          </div>
        </div>
      </div>

      {/* 부제 */}
      {subTitleInvalid && (
        <div className="absolute text-error-main mt-[-35px] text-body3">
          필수 입력해주세요
        </div>
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
        className={`${subTitleInvalid ? "border-error-main" : "border-purple-main1"} relative`}
      />
    </>
  );
};

export default RegisterProjectInputTitle;
