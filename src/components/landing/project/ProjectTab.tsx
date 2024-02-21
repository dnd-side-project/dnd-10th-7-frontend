"use client";

import { Box, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import ProjectItem from "./ProjectItem";
import { LinkedCamera } from "@mui/icons-material";
import { TagProps } from "@component/components/common-components/tag";
import clsx from "clsx";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <>{children}</>
        </Box>
      )}
    </div>
  );
}

export const dummyData = [
  {
    type: "환경",
    status: "기획중",
    title: "아아아아아아앙",
    subTitle: "서브서브서브서브서",
    user: "chaemin",
    //   profileImg:string;
    createdDate: "2020.02.02",
    pullUpCount: 20,
    likeCount: 28,
    commentCount: 12,
    projectId: 1,
  },
  {
    type: "환경",
    status: "기획중",
    title: "아아아아아아앙",
    subTitle: "서브서브서브서브서",
    user: "chaemin",
    //   profileImg:string;
    createdDate: "2020.02.02",
    pullUpCount: 20,
    likeCount: 28,
    commentCount: 12,
    projectId: 2,
  },
  {
    type: "환경",
    status: "기획중",
    title: "아아아아아아앙",
    subTitle: "서브서브서브서브서",
    user: "chaemin",
    //   profileImg:string;
    createdDate: "2020.02.02",
    pullUpCount: 20,
    likeCount: 28,
    commentCount: 12,
    projectId: 3,
  },
];

export const ProjectTab = () => {
  const [tab, setTab] = useState(0);

  // 정렬 - 0은 최신순, 1은 인기순
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
            label="피드백 중인 프로젝트"
            {...a11yProps(0)}
            sx={{ fontSize: "18px" }}
          />
          <Tab
            label="완료된 프로젝트"
            {...a11yProps(1)}
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
              최신순
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
              인기순
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
    </Box>
  );
};
