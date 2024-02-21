import { Brush, Monitor } from "@mui/icons-material";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
import ForestOutlinedIcon from "@mui/icons-material/ForestOutlined";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import LaptopChromebookOutlinedIcon from "@mui/icons-material/LaptopChromebookOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import ViewModuleOutlinedIcon from "@mui/icons-material/ViewModuleOutlined";
import MonitorHeartOutlinedIcon from "@mui/icons-material/MonitorHeartOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { FIELD_TYPE } from "@component/types/api";
import { useProjectList } from "@component/hooks/useProject";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ProjectItemProps } from "@component/types/Project";

type Props = {
  currentMenu: string | null; // 현재 선택된 카테고리 ID
  onMenuClick: (menuId: string) => void; // 카테고리 클릭 시 호출될 콜백 함수
  isLoading?: boolean;
};

// { currentMenu, onMenuClick, isLoading }: Props

type MenuProps = {
  currentMenu: string;
  setCurrentMenu: Dispatch<SetStateAction<string>>;
};

export const Categories = ({ currentMenu, onMenuClick, isLoading }: Props) => {
  const categoryItem = [
    { id: 0, icon: <Brush />, name: "예술/대중문화" },
    { id: 1, icon: <LocalAtmOutlinedIcon />, name: "금융/핀테크" },
    { id: 2, icon: <ForestOutlinedIcon />, name: "환경" },
    { id: 3, icon: <AutoStoriesOutlinedIcon />, name: "교육" },
    { id: 4, icon: <MonitorHeartOutlinedIcon />, name: "건강" },
    { id: 5, icon: <LaptopChromebookOutlinedIcon />, name: "AI/머신러닝" },
    { id: 6, icon: <ShoppingCartOutlinedIcon />, name: "취미/실용" },
    { id: 7, icon: <SportsEsportsOutlinedIcon />, name: "게임" },
    { id: 8, icon: <Brush />, name: "기타" },
  ];

  const [currentField, setCurrentField] = useState<string>("");

  // const onMenuClick = (menu: string) => {
  //   console.log(menu, "current");
  //   setCurrentField(menu);
  // };

  // const { data: projectListData, isLoading } = useProjectList({
  //   field: currentField,
  // });

  // console.log("category", projectListData?.data?.content);

  return (
    <div className="flex flex-col gap-5 w-full max-w-[190px] pr-6">
      <p className="pt-3 border-b-[1px] border-gray-4 pb-3">관심분야</p>
      <div className="flex flex-col gap-[24px]">
        <div
          className="hover:text-purple-main1 cursor-pointer"
          onClick={() => onMenuClick("")}
        >
          전체보기
        </div>
        {categoryItem.map((item, idx) => (
          <div key={idx} onClick={() => onMenuClick(item.name)}>
            {/* 선택된 카테고리일 경우 아이콘 색상 변경 */}
            <p
              className={`text-gray-80 text-body2 cursor-pointer hover:text-purple-main1 ${currentField === item.name ? "text-purple-main1" : ""}`}
            >
              {item.icon}&nbsp;&nbsp;{item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
