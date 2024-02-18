import { Brush, Monitor } from "@mui/icons-material";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
import ForestOutlinedIcon from "@mui/icons-material/ForestOutlined";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import LaptopChromebookOutlinedIcon from "@mui/icons-material/LaptopChromebookOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import ViewModuleOutlinedIcon from "@mui/icons-material/ViewModuleOutlined";
import MonitorHeartOutlinedIcon from "@mui/icons-material/MonitorHeartOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

// 프로젝트 전체보기 카테고리 컴포넌트
export const Categories = () => {
  const categoryItem = [
    {
      icon: <Brush />,
      name: "예술/대중문화",
    },
    {
      icon: <LocalAtmOutlinedIcon />,
      name: "금융/핀테크",
    },
    {
      icon: <ForestOutlinedIcon />,
      name: "환경",
    },
    {
      icon: <AutoStoriesOutlinedIcon />,
      name: "교육",
    },
    {
      icon: <MonitorHeartOutlinedIcon />,
      name: "건강",
    },
    {
      icon: <LaptopChromebookOutlinedIcon />,
      name: "AI/머신러닝",
    },
    {
      icon: <ShoppingCartOutlinedIcon />,
      name: "취미/실용",
    },
    {
      icon: <SportsEsportsOutlinedIcon />,
      name: "게임",
    },
    {
      icon: <Brush />,
      name: "기타",
    },
  ];

  return (
    <div className="flex flex-col gap-5 w-full max-w-[190px] pr-6">
      <p className="pt-3 border-b-[1px] border-gray-4 pb-3">관심분야</p>
      <div className="flex flex-col gap-[24px]">
        <div className="hover:text-purple-main1 cursor-pointer">전체보기</div>
        {categoryItem.map((item, idx) => {
          return (
            <div key={idx}>
              <p className="text-gray-80 text-body2 cursor-pointer hover:text-purple-main1">
                {item.icon}&nbsp;&nbsp;{item.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
