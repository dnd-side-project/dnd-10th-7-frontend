import { useState } from "react";
import { DropdownBoxPlace, DropdownBoxProps } from "./DropdownBox.types";
import clsx from "clsx";
import { useRouter } from "next/navigation";

const style: {
  base: string;
  place: Record<DropdownBoxPlace, string>;
} = {
  base: "top-10 absolute right-0 w-[200px] z-20 bg-white flex flex-col border rounded-[16px] cursor-pointer",
  place: {
    left: "",
    center: "",
    right: "",
  },
};

const DropdownBox = ({ items, place }: DropdownBoxProps) => {
  const [hoverMenu, setHoverMenu] = useState<string | null>(null);
  const router = useRouter();

  const onClick = (item: string) => {
    if (item === "마이페이지") router.push("/mypage");
    if (item === "로그아웃") {
      sessionStorage.removeItem("accessToken");
      sessionStorage.removeItem("refreshToken");
      router.push("/");
      window.location.reload();
    }
  };

  return (
    <div
      className={style.base}
      style={{
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
      }}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          onClick={() => onClick(item)}
          onMouseEnter={() => setHoverMenu(item)}
          onMouseLeave={() => setHoverMenu(null)}
          className={clsx(
            hoverMenu === item && "text-purple-main1",
            "transition duration-100 ease-in-out cursor-pointer px-5 py-3",
            style.place[place]
          )}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default DropdownBox;
