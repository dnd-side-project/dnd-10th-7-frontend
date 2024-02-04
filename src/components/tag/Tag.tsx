import clsx from "clsx";
import { TagProps } from ".";
import { PropsWithChildren, forwardRef } from "react";
import { Brush } from "@mui/icons-material";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
import ForestOutlinedIcon from "@mui/icons-material/ForestOutlined";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import LaptopChromebookOutlinedIcon from "@mui/icons-material/LaptopChromebookOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import ViewModuleOutlinedIcon from "@mui/icons-material/ViewModuleOutlined";
import MonitorHeartOutlinedIcon from "@mui/icons-material/MonitorHeartOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const style: {
  base: string;
} = {
  base: "h-[32px] inline-flex justify-center items-center rounded-full px-[10px] py-[5px]",
};

const Tag = forwardRef<HTMLDivElement, PropsWithChildren<TagProps>>(
  (props, ref) => {
    const { type, status, startIcon } = props;

    return (
      <div className={clsx("flex flex-row gap-[10px]")}>
        {status && (
          <div
            className={clsx(
              style.base,
              "text-purple-active border border-purple-main1"
            )}
          >
            {status}
          </div>
        )}
        {type && (
          <div
            className={clsx(
              style.base,
              "flex flex-row gap-1 text-blue-active border border-blue-main1"
            )}
          >
            {type === "예술/대중문화" && <Brush />}
            {type === "금융/핀테크" && <LocalAtmOutlinedIcon />}
            {type === "환경" && <ForestOutlinedIcon />}
            {type === "AI/머신러닝" && <LaptopChromebookOutlinedIcon />}
            {type === "게임" && <SportsEsportsOutlinedIcon />}
            {type === "건강" && <MonitorHeartOutlinedIcon />}
            {type === "취미/실용" && <ShoppingCartOutlinedIcon />}
            {type === "기타" && <ViewModuleOutlinedIcon />}
            {type === "교육" && <AutoStoriesOutlinedIcon />}
            {startIcon} {type}
          </div>
        )}
      </div>
    );
  }
);

Tag.displayName = "Tag";

export default Tag;
