import { UserFeedBackInfoProps, UserFeed } from "@component/types/User";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const MyPageFeedBackInfo = ({
  level,
  restFeedbackCount,
  feedbackCount,
  projectCount,
  likeCount,
}: UserFeedBackInfoProps) => {
  const userFeedBackList: UserFeed[] = [
    { label: "피드백 작성 수", value: feedbackCount },
    { label: "프로젝트 작성 수", value: projectCount },
    { label: "받은 좋아요 수", value: likeCount },
  ];

  return (
    <div className="mt-12 flex flex-col items-center">
      {/* my level */}
      <div className="flex justify-between items-center min-w-[285px]">
        <span className="text-body1">나의 레벨</span>
        <HelpOutlineIcon fontSize="small" className="text-gray-40" />
      </div>

      {/* level info */}
      <div className="mt-7 flex flex-col items-center">
        <div className="bg-gray-20 rounded-full w-[155px] h-[155px]"></div>
        <div className="mt-[26px] flex flex-col items-center">
          {/* TODO: level 정보 반영! */}
          <div className="text-h2">Lv.{level} 이 구역 피드백왕</div>
          <div className="text-caption1 text-gray-60 mt-[6px]">
            다음레벨까지 {restFeedbackCount}번의 피드백이 남았어요
          </div>
        </div>
      </div>

      {/* activity info */}
      <div className="mt-[60px]">
        <span className="text-body1">활동정보</span>
        <div className="mt-7">
          <div className="flex">
            {userFeedBackList.map(({ label, value }, index) => (
              <div
                key={label}
                className={index === userFeedBackList.length - 1 ? "" : "me-8"}
              >
                <div>{value}</div>
                <div className="text-caption1 text-gray-60 mt-[7px]">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyPageFeedBackInfo;
