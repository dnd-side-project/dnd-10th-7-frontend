import { UserInfoProps, UserInfo } from "@component/types/User";
import Image from "next/image";

const MyPageUserInfo = ({
  username,
  birth,
  email,
  interest,
  profileImg,
  career,
}: UserInfoProps) => {
  const userInfoList: UserInfo[] = [
    { label: "생년월일", value: birth },
    { label: "이메일", value: email },
    { label: "관심분야", value: interest },
  ];
  return (
    <div className="mb-8">
      {/* 프로필 */}
      <div className="flex items-center mb-[42px]">
        <Image
          src={profileImg}
          alt={username}
          width={60}
          height={60}
          className="w-[60px] h-[60px] rounded-full me-8"
        ></Image>
        <div>
          <p className="text-h2">{username}</p>
          <p className="text-body3 text-gray-60">{career}</p>
        </div>
      </div>

      {/* 정보 */}
      <div>
        {userInfoList.map(({ label, value }) => (
          <span key={label} className="flex min-w-[285px] text-body3 mb-[18px]">
            <p className="min-w-[92px] text-gray-80 font-medium">{label}</p>
            <p className="text-gray-60">{value}</p>
          </span>
        ))}
      </div>
    </div>
  );
};

export default MyPageUserInfo;
