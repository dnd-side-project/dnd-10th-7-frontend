import { InputTitleProps } from "@component/types/Sendback";

const RegisterSendbackInputTitle = ({
  titleValue,
  onTitleChange,
}: InputTitleProps) => {
  return (
    <input
      type="text"
      value={titleValue}
      onChange={onTitleChange}
      placeholder="피드백 요청 제목을 입력하세요."
      className="text-title w-[707px] focus:outline-none caret-purple-main1 mt-16"
    />
  );
};

export default RegisterSendbackInputTitle;
