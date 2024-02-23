import Button from "@component/components/common-components/button/Button";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

const notify = () =>
  toast.success("로그인이 필요한 서비스에요", {
    style: {
      backgroundColor: "#F9F7FF",
      border: "1px solid #8C82FF",
      padding: "16px",
      color: "#8C82FF",
    },
    icon: "👋",
  });

const ProjectDetailFeedBackRequest = ({
  projectFeedbackData,
  projectId,
  isAuthor,
}: any) => {
  const router = useRouter();

  // 로그인 한 유저인지 확인
  const accessToken =
    typeof window !== "undefined" && sessionStorage.getItem("accessToken");

  return (
    <>
      {projectFeedbackData &&
        projectFeedbackData.map((feedback: any, index: number) => (
          <div
            key={index}
            className="bg-purple-main5 rounded-[10px] w-[253px] p-7 mb-8"
          >
            {/* title */}
            <div className="text-h2 mb-2">{feedback.title}</div>
            {/* period */}
            <div className="text-body2 font-medium text-gray-60 mb-[33px]">
              {feedback.startedAt} ~ {feedback.endedAt}
            </div>
            {/* reward */}
            <div className="text-h2 mb-2">추가 리워드</div>
            <div className="text-body2 font-medium text-gray-60 mb-[33px]">
              {feedback.rewardMessage}
            </div>
            {!feedback.isSubmiited ? (
              <div className="flex justify-end">
                <Button
                  onClick={() => {
                    if (accessToken) {
                      router.push(
                        `/project/${projectId}/feedback/${feedback.feedbackId}`
                      );
                    } else {
                      notify();
                    }
                  }}
                >
                  피드백 작성하기
                </Button>
              </div>
            ) : (
              <div className="flex justify-end">
                <Button color="disabled" className="cursor-none">
                  참여 완료
                </Button>
              </div>
            )}
          </div>
        ))}

      {/* if my project */}
      {isAuthor && (
        <div className="flex justify-end">
          <Button
            onClick={() => router.push(`/${projectId}/sendback/register`)}
          >
            피드백 요청 글 작성하기
          </Button>
        </div>
      )}
    </>
  );
};

export default ProjectDetailFeedBackRequest;
