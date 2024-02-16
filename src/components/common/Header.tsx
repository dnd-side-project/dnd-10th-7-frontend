import clsx from "clsx";
import Image from "next/image";

export const Header = () => {
  const variants = {
    menu: "hover:text-purple-main1 cursor-pointer",
  };

  const username = "chamny";
  return (
    <div className="sticky z-50 top-0 m-auto max-w-[1080px] py-[17px] w-full h-[70px] flex flex-row items-center justify-between bg-white text-h2">
      {/* left side */}
      <div className="flex flex-row gap-[50px]">
        <div className={clsx(variants.menu, "flex flex-row gap-2")}>
          <span>logo</span>
          <span>sendback</span>
        </div>
        <div className={clsx(variants.menu)}>프로젝트</div>
        <div className={clsx(variants.menu)}>프로젝트 등록하기</div>
      </div>

      {/* right side */}
      <div className={clsx(variants.menu)}>로그인</div>

      {/* 로그인 후 */}
      <div className="flex flex-row items-center gap-2">
        {/* <Image
          src={profileImg}
          alt={username}
          width={60}
          height={60}
          className="w-[34px] h-[34px] rounded-full me-8"
        ></Image> */}
        <div>{username}</div>
      </div>
    </div>
  );
};
