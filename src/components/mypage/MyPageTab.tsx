"use client";

import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import {
  CustomTabPanel,
  a11yProps,
  dummyData,
} from "../landing/project/ProjectTab";
import clsx from "clsx";
import ProjectItem from "../landing/project/ProjectItem";
import { TagProps } from "../common-components/tag";

export const MyPageTab = () => {
  const [tab, setTab] = useState(0);

  // 정렬 - 0은 진행중, 1은 완료
  const [sort, setSort] = useState(0);

  const handleChange = (e: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  const handleSorting = (sortingType: number) => {
    setSort(sortingType);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Tabs value={tab} onChange={handleChange}>
          <Tab
            label="등록한 프로젝트"
            {...a11yProps(0)}
            sx={{ fontSize: "18px" }}
          />
          <Tab
            label="피드백한 프로젝트"
            {...a11yProps(1)}
            sx={{ fontSize: "18px" }}
          />
          <Tab
            label="스크랩한 프로젝트"
            {...a11yProps(2)}
            sx={{ fontSize: "18px" }}
          />
        </Tabs>
        <div className="flex gap-[20px] pr-2">
          <div
            className="flex items-center gap-[10px] cursor-pointer"
            onClick={() => handleSorting(0)}
          >
            <div
              className={clsx(
                "w-[7px] h-[7px] rounded-full ",
                sort === 0 ? "bg-purple-main1" : "bg-gray-60"
              )}
            />
            <div
              className={clsx(
                sort === 0 ? "text-purple-main1" : "text-gray-60"
              )}
            >
              진행중
            </div>
          </div>
          <div
            className="flex items-center gap-[10px] cursor-pointer"
            onClick={() => handleSorting(1)}
          >
            <div
              className={clsx(
                "w-[7px] h-[7px] rounded-full",
                sort === 1 ? "bg-purple-main1" : "bg-gray-60"
              )}
            />
            <div
              className={clsx(
                sort === 1 ? "text-purple-main1" : "text-gray-60"
              )}
            >
              완료
            </div>
          </div>
        </div>
      </Box>
      <CustomTabPanel value={tab} index={0}>
        {dummyData.map((item, idx) => {
          return (
            <div key={idx}>
              <ProjectItem
                type={item.type as TagProps["type"]}
                status={item.status as TagProps["status"]}
                title={item.title}
                subTitle={item.subTitle}
                user={item.user}
                createdDate={item.createdDate}
                pullUpCount={item.pullUpCount}
                likeCount={item.likeCount}
                commentCount={item.commentCount}
                moreBtn
              />
            </div>
          );
        })}
      </CustomTabPanel>
      <CustomTabPanel value={tab} index={1}>
        {dummyData.map((item, idx) => {
          return (
            <div key={idx}>
              <ProjectItem
                type={item.type as TagProps["type"]}
                status={item.status as TagProps["status"]}
                title={item.title}
                subTitle={item.subTitle}
                user={item.user}
                createdDate={item.createdDate}
                pullUpCount={item.pullUpCount}
                likeCount={item.likeCount}
                commentCount={item.commentCount}
              />
            </div>
          );
        })}
      </CustomTabPanel>
      <CustomTabPanel value={tab} index={2}>
        {dummyData.map((item, idx) => {
          return (
            <div key={idx}>
              <ProjectItem
                type={item.type as TagProps["type"]}
                status={item.status as TagProps["status"]}
                title={item.title}
                subTitle={item.subTitle}
                user={item.user}
                createdDate={item.createdDate}
                pullUpCount={item.pullUpCount}
                likeCount={item.likeCount}
                commentCount={item.commentCount}
              />
            </div>
          );
        })}
      </CustomTabPanel>
    </Box>
  );
};
