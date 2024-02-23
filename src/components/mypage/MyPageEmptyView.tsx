import Button from "../common-components/button";

type EmptyViewProps = {
  tab: number;
};

export const MyPageEmptyView = ({ tab }: EmptyViewProps) => {
  //tab이랑 id값 같아야 보내주기
  const emptyViewData = [
    {
      id: 1,
      text: "아직 등록된 프로젝트가 없어요.\n 프로젝트 모아보기에서 다른 사용자들의 프로젝트를 둘러보고\n 서비스명에서 다양한 사람들에게 피드백을 받아 보세요!",
    },
    {
      id: 2,
      text: "아직 작성한 피드백이 없어요.\n 프로젝트 모아보기에서 다른 사용자들의\n 프로젝트를 둘러보고 피드백을 등록해보세요!",
    },
    {
      id: 3,
      text: "아직 스크랩한 프로젝트가 없어요.\n 다른 사용자들의 프로젝트를 둘러보고\n 마음에 드는 프로젝트를 스크랩해보세요!",
    },
  ];

  const viewData = emptyViewData.filter((item) => item.id === tab);

  return (
    <div className="flex flex-col justify-center items-center">
      <div>image</div>
      <div>
        {viewData.map((item) => (
          <>
            {/* text area */}
            <div key={item.id}>{item.text}</div>
            {/* button area */}
            {item.id === 1 && (
              <div>
                <Button onClick={() => (window.location.href = "/project")}>
                  둘러보기
                </Button>
                <Button
                  onClick={() => (window.location.href = "/project/register")}
                >
                  프로젝트 등록
                </Button>
              </div>
            )}
            {item.id === 2 ||
              (item.id === 3 && (
                <div>
                  <Button onClick={() => (window.location.href = "/project")}>
                    둘러보기
                  </Button>
                </div>
              ))}
          </>
        ))}
        <div></div>
      </div>
    </div>
  );
};
