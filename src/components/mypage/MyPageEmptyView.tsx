import Image from "next/image";
import Button from "../common-components/button";

type EmptyViewProps = {
  tab: number;
};

export const MyPageEmptyView = ({ tab }: EmptyViewProps) => {
  //tab이랑 id값 같아야 보내주기
  const emptyViewData = [
    {
      id: 1,
      text: (
        <>
          아직 등록된 프로젝트가 없어요.
          <br />
          프로젝트 모아보기에서 다른 사용자들의 프로젝트를 둘러보고
          <br />
          다양한 사람들에게 피드백을 받아 보세요!
        </>
      ),
    },
    {
      id: 2,
      text: (
        <>
          아직 작성한 피드백이 없어요.
          <br />
          프로젝트 모아보기에서 다른 사용자들의
          <br />
          프로젝트를 둘러보고 피드백을 등록해보세요!
        </>
      ),
    },
    {
      id: 3,
      text: (
        <>
          아직 스크랩한 프로젝트가 없어요.
          <br />
          다른 사용자들의 프로젝트를 둘러보고
          <br />
          마음에 드는 프로젝트를 스크랩해보세요!
        </>
      ),
    },
  ];

  const viewData = emptyViewData.filter((item) => item.id === tab);

  return (
    <div className="flex flex-col justify-center items-center font-medium max-w-[660px] text-center">
      <Image src={"/assets/modal/mypage.png"} alt="" width={190} height={190} />
      <div className="pt-2">
        {viewData.map((item) => (
          <>
            {/* text area */}
            <div key={item.id} className="text-gray-80">
              {item.text}
            </div>
            {/* button area */}
            {item.id === 1 && (
              <div className="flex flex-row gap-2 pt-[36px] justify-center items-center">
                <Button
                  color="thinPurple"
                  onClick={() => (window.location.href = "/project")}
                >
                  둘러보기
                </Button>
                <Button
                  onClick={() => (window.location.href = "/project/register")}
                >
                  프로젝트 등록
                </Button>
              </div>
            )}
            {item.id === 2 && (
              <div className="pt-[36px] flex justify-center items-center">
                <Button onClick={() => (window.location.href = "/project")}>
                  둘러보기
                </Button>
              </div>
            )}
            {item.id === 3 && (
              <div className="pt-[36px] flex justify-center items-center">
                <Button onClick={() => (window.location.href = "/project")}>
                  둘러보기
                </Button>
              </div>
            )}
          </>
        ))}
        <div></div>
      </div>
    </div>
  );
};
