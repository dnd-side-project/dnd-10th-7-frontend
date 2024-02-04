'use client'
import { TabProps } from ".";
import { useState } from "react";
import clsx from "clsx";

// icons
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import ForestOutlinedIcon from '@mui/icons-material/ForestOutlined';
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
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
        const commonProps = "me-[10px] w-[22px]";

        switch (content) {
        case '예술/대중문화':
            return <BrushOutlinedIcon className={commonProps} />;
        case '환경':
            return <ForestOutlinedIcon className={commonProps} />;
        case '건강':
            return <MonitorHeartOutlinedIcon className={commonProps} />;
        case '취미/실용':
            return <ShoppingCartOutlinedIcon className={commonProps} />;
        case '금융/핀테크':
            return <LocalAtmOutlinedIcon className={commonProps} />;
        case '교육':
            return <AutoStoriesOutlinedIcon className={commonProps} />;
        case '게임':
            return <SportsEsportsOutlinedIcon className={commonProps} />;
        case 'AI/머신러닝':
            return <LaptopChromebookOutlinedIcon className={commonProps} />;
        }
    };

    return (
        <div onClick={handleToggle}
            className={clsx(
                "cursor-pointer",
                "p-[14px] rounded-[6px] inline-block text-gray-60 text-h2 bg-gray-10",
                isChecked && "border border-2 border-purple-main1 bg-purple-main5 text-purple-main1",
            )}
        >
            {getIconComponent()}
            <span>{content}</span>
        </div>
    )
}

export default Tab;