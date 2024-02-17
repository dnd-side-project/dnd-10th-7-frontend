import { UserInfoProps } from "@component/types/Sendback";
import Image from "next/image";

const ProjectSendbackUserInfo = ({
  username,
  userlevel,
  profileImg,
  createdAt,
}: UserInfoProps) => {
  return (
    <div className="flex items-center">
      <Image
        src={profileImg}
        alt={profileImg}
        width={47}
        height={47}
        className="w-[47px] h-[47px] rounded-full me-4"
      ></Image>
      <div className="text-body2 text-gray-60">
        {/* TODO: 레벨 이름 적기 */}
        <p className="font-medium">
          {username} Lv. {userlevel === "1" && "불주먹"}
        </p>
        {/* TODO: 날짜 형식 맞추기 */}
        <div className="font-medium">{createdAt}</div>
      </div>
    </div>
  );
};
export default ProjectSendbackUserInfo;
