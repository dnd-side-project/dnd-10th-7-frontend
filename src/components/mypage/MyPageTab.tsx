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
import {
  useGetMyFeedbackData,
  useGetMyProjectData,
  useGetMyScrapData,
} from "@component/hooks/useMyPage";

export type MyItemData = {
  projectId: number;
  title: string;
  progress: string;
  summary: string;
  field: TagProps["type"];
  createdAt: string;
  pullUpCnt: number;
};

export const MyPageTab = () => {
  const [tab, setTab] = useState(0);

  // 정렬 - 0은 완료, 1은 진행중
  const [sort, setSort] = useState(0);
  const [pageIndex, setPageIndex] = useState(0);

  const handleChange = (e: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  const handleSorting = (sortingType: number) => {
    setSort(sortingType);
  };

  const { data: myProjectData, isLoading: isProjectLoading } =
    useGetMyProjectData({
      page: pageIndex,
      size: 5,
      sort: sort,
    });

  console.log("prp", myProjectData);

  const { data: myScrapData, isLoading: isScrapLoading } = useGetMyScrapData({
    page: pageIndex,
    size: 5,
    sort: sort,
  });

  const { data: myFeedbackData, isLoading: isFeedbackLoading } =
    useGetMyFeedbackData({
      page: pageIndex,
      size: 5,
      sort: sort,
    });

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
            onClick={() => setSort(1)}
          >
            <div
              className={clsx(
                "w-[7px] h-[7px] rounded-full ",
                sort === 1 ? "bg-purple-main1" : "bg-gray-60"
              )}
            />
            <div
              className={clsx(
                sort === 1 ? "text-purple-main1" : "text-gray-60"
              )}
            >
              진행중
            </div>
          </div>
          <div
            className="flex items-center gap-[10px] cursor-pointer"
            onClick={() => setSort(0)}
          >
            <div
              className={clsx(
                "w-[7px] h-[7px] rounded-full",
                sort === 0 ? "bg-purple-main1" : "bg-gray-60"
              )}
            />
            <div
              className={clsx(
                sort === 0 ? "text-purple-main1" : "text-gray-60"
              )}
            >
              완료
            </div>
          </div>
        </div>
      </Box>
      <CustomTabPanel value={tab} index={0}>
        {myProjectData?.data?.content.map((item: any, idx: number) => {
          return (
            <div key={idx}>
              <ProjectItem
                projectId={item.projectId}
                title={item.title}
                status={item.progress}
                subTitle={item.summary}
                createdDate={item.createdAt}
                pullUpCount={item.pullUpCount}
                type={item.field as TagProps["type"]}
              />
            </div>
          );
        })}
      </CustomTabPanel>
      <CustomTabPanel value={tab} index={1}>
        {myFeedbackData?.data?.content.map((item: any, idx: number) => {
          return (
            <div key={idx}>
              <ProjectItem
                projectId={item.projectId}
                title={item.title}
                status={item.progress}
                subTitle={item.summary}
                createdDate={item.createdAt}
                pullUpCount={item.pullUpCount}
                type={item.field as TagProps["type"]}
              />
            </div>
          );
        })}
      </CustomTabPanel>
      <CustomTabPanel value={tab} index={2}>
        {myScrapData?.data?.content.map((item: any, idx: number) => {
          return (
            <div key={idx}>
              <ProjectItem
                projectId={item.projectId}
                title={item.title}
                status={item.progress}
                subTitle={item.summary}
                createdDate={item.createdAt}
                pullUpCount={item.pullUpCount}
                type={item.field as TagProps["type"]}
              />
            </div>
          );
        })}
      </CustomTabPanel>
    </Box>
  );
};
