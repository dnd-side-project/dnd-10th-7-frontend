'use client'
import { TabProps } from ".";
import { useState } from "react";
import clsx from "clsx";

// icons
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import ForestOutlinedIcon from '@mui/icons-material/ForestOutlined';
// 다시 찾아야함
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';
// 다시 찾아야함
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
// 다시 찾아야함
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import LaptopChromebookOutlinedIcon from '@mui/icons-material/LaptopChromebookOutlined';

export const Tab = ({
    content
}: TabProps) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
        setIsChecked((prev: boolean) => !prev);
    };

    // content에 따른 아이콘 변화
    const getIconComponent = () => {
        switch (content) {
          case '예술/대중문화':
            return <BrushOutlinedIcon className="me-[10px]" />;
          case '환경':
            return <ForestOutlinedIcon className="me-[10px]" />;
          case '건강':
            return <MonitorHeartOutlinedIcon className="me-[10px]" />;
          case '취미/실용':
            return <ShoppingCartOutlinedIcon className="me-[10px]" />;
        case '금융/핀테크':
            return <LocalAtmOutlinedIcon className="me-[10px]" />;
        case '교육':
            return <AutoStoriesOutlinedIcon className="me-[10px]" />;
        case '게임':
            return <SportsEsportsOutlinedIcon className="me-[10px]" />;
        case 'AI/머신러닝':
            return <LaptopChromebookOutlinedIcon className="me-[10px]" />;
        }
      };

    return (
        <div onClick={handleToggle}
            className={clsx(
                "cursor-pointer",
                "p-[14px] rounded-[6px] inline-block text-gray-60 text-h2 bg-gray-10 font-bold m-[12px]",
                isChecked && "border border-2 border-purple-main1 bg-purple-main5 text-purple-main1 font-bold",
            )}
        >
            {getIconComponent()}
            <span>{content}</span>
        </div>
    )
}

export default Tab;