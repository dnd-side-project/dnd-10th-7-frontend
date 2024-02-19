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
        alt="profile"
        width={47}
        height={47}
        className="w-[47px] h-[47px] rounded-full me-4 object-cover"
      ></Image>
      <div className="text-body2 text-gray-60">
        <p className="font-medium">
          {username} <span className="ms-2 font-medium">Lv.{""}</span>
          {(userlevel === "주먹밥" && "1 주먹밥") ||
            ("솜주먹" && "2 솜주먹") ||
            ("물주먹" && "3 물주먹") ||
            ("돌주먹" && "4 돌주먹") ||
            ("불주먹" && "5 불주먹")}
        </p>
        <div className="font-medium">{createdAt}</div>
      </div>
    </div>
  );
};
export default ProjectSendbackUserInfo;
