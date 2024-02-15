import Button from "@component/components/common-components/button/Button";

const ProjectDetailFeedBackRequest = () => {
  // API respone 미작성으로 map 사용 안함
  return (
    <>
      <div className="bg-purple-main5 rounded-[10px] w-[253px] p-7 mb-8">
        {/* title */}
        <div className="text-h2 mb-2">기획 관련 설문조사를 진행해주세요!</div>
        {/* period */}
        <div className="text-body2 font-medium text-gray-60 mb-[33px]">
          2024.01.21~2024.02.27
        </div>
        {/* reward */}
        <div className="text-h2 mb-2">추가 리워드</div>
        <div className="text-body2 font-medium text-gray-60 mb-[33px]">
          추첨 커피 기프티콘 증정
        </div>

        <div className="flex justify-end">
          {/* TODO: router 연결 피드백 작성 페이지 */}
          <Button>피드백 작성하기</Button>
        </div>
      </div>

      <div className="bg-purple-main5 rounded-[10px] w-[253px] p-7 mb-8">
        {/* title */}
        <div className="text-h2 mb-2">기획 관련 설문조사를 진행해주세요!</div>
        {/* period */}
        <div className="text-body2 font-medium text-gray-60 mb-[33px]">
          2024.01.21~2024.02.27
        </div>
        {/* reward */}
        <div className="text-h2 mb-2">추가 리워드</div>
        <div className="text-body2 font-medium text-gray-60 mb-[33px]">
          추첨 커피 기프티콘 증정
        </div>

        <div className="flex justify-end">
          {/* TODO: router 연결 피드백 작성 페이지 */}
          <Button color="disabled">참여완료</Button>
        </div>
      </div>
    </>
  );
};

export default ProjectDetailFeedBackRequest;
