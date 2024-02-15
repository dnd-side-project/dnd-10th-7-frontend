import ProjectSendbackTitleData from "@component/components/project/ProjectSendbackTitleData";
import ProjectSendbackUserInfo from "@component/components/project/ProjectSendbackUserInfo";
import Button from "@component/components/common-components/button/Button";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Link from "next/link";
import ProjectDetailImage from "./ProjectDetailImage";

type PageParams = {
  projectId: number;
};

export default function ProjectDetailPage({ params }: { params: PageParams }) {
  console.log(params.projectId);
  // TODO: API response 확정 후 타입 지정
  const projectData: any = {
    projectId: 1,
    title: "팅클(Tincle) - 우리들만의 피드 폐쇄형 SNS 서비스",
    fields: "예술/대중문화",
    process: "기획중",
    username: "철수",
    profileImageUrl: "/assets/profile_img.png",
    userlevel: "1",
    content: "",
    demoSiteUrl: "",
    frontedCount: 2,
    backendCount: 2,
    designerCount: 2,
    plannerCount: 0,
    likeCount: 2,
    commentCount: 2,
    scrappedCount: 2,
    projectImgUrl: [
      "/assets/profile_img.png",
      "/assets/profile_img.png",
      "/assets/profile_img.png",
      "/assets/profile_img.png",
      "/assets/profile_img.png",
    ],
    createdAt: "2022.05.05 11:22",
    endedAt: "2022.05.10 11:22",
  };
  return (
    <div className="w-[1440px] flex flex-col items-center">
      <section className="max-w-[1080px] w-full mt-[56.5px]">
        <ProjectSendbackTitleData
          title={projectData.title}
          field={projectData.fields}
          process={projectData.process}
        />
        <ProjectSendbackUserInfo
          username={projectData.username}
          userlevel={projectData.userlevel}
          profileImg={projectData.profileImageUrl}
          createdAt={projectData.createdAt}
        />

        {/* 소개 */}
        <div className="min-w-[787px] mt-[72px]">소개</div>

        {/* 서비스 링크 이동 */}
        <Link href={projectData.demoSiteUrl}>
          <Button size="xs" className="min-w-[144px] mt-[88px] mb-[72px]">
            <ExitToAppIcon className="w-[22px] h-[22px] text-white me-2" />
            서비스 링크
          </Button>
        </Link>

        {/* 이미지 */}
        <ProjectDetailImage
          projectImgUrl={projectData.projectImgUrl}
        />

        {/* 기간 */}
        <div className="min-w-[787px] mt-[72px]">기간</div>

        {/* 멤버 */}
        <div className="min-w-[787px] mt-[72px]">멤버</div>
      </section>
    </div>
  );
}
