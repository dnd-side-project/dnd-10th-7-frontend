"use client";

import { Box, Tab, Tabs } from "@mui/material";
import { useEffect, useState } from "react";
import {
  CustomTabPanel,
  ProjectTabProps,
  a11yProps,
} from "../landing/project/ProjectTab";
import clsx from "clsx";
import ProjectItem from "../landing/project/ProjectItem";
import { TagProps } from "../common-components/tag";
import {
  useGetMyFeedbackData,
  useGetMyProjectData,
  useGetMyScrapData,
} from "@component/hooks/useMyPage";
import Pagination from "../common-components/pagination";
import { MyPageEmptyView } from "./MyPageEmptyView";
import { ProjectItemProps } from "@component/types/Project";

export const MyPageTab = () => {
  const [tab, setTab] = useState(0);

  // 정렬 - 0은 완료, 1은 진행중
  const [sort, setSort] = useState(1);
  const [pageIndex, setPageIndex] = useState(1); // pageIndex 는 1 이상

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
            onClick={() => handleSorting(1)}
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
            onClick={() => handleSorting(0)}
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
        <div className="max-h-[1360px] mb-[77px] m-auto ">
          {myProjectData?.data?.data?.totalElements === 0 ? (
            <div className="h-[700px] flex items-center justify-center">
              <MyPageEmptyView tab={1} />
            </div>
          ) : (
            <>
              {myProjectData?.data?.data?.content.map(
                (item: ProjectItemProps, idx: number) => {
                  return (
                    <div key={idx}>
                      <ProjectItem data={item} />
                    </div>
                  );
                }
              )}
            </>
          )}
        </div>

        {myProjectData?.data?.data?.totalPages > 0 && (
          <div className="flex justify-center items-center">
            <Pagination
              totalPages={myProjectData?.data?.data?.totalPages}
              currentPage={pageIndex}
              setCurrentPage={setPageIndex}
            />
          </div>
        )}
      </CustomTabPanel>
      <CustomTabPanel value={tab} index={1}>
        <div className="max-h-[1360px] mb-[77px] m-auto ">
          {myFeedbackData?.data?.data?.totalElements === 0 ? (
            <div className="h-[600px] flex items-center justify-center">
              <MyPageEmptyView tab={2} />
            </div>
          ) : (
            <>
              {myFeedbackData?.data?.data?.content.map(
                (item: ProjectItemProps, idx: number) => {
                  return (
                    <div key={idx}>
                      <ProjectItem data={item} />
                    </div>
                  );
                }
              )}
            </>
          )}
        </div>
        {myFeedbackData?.data?.data?.totalPages > 0 && (
          <div className="flex justify-center items-center">
            <Pagination
              totalPages={myFeedbackData?.data?.data?.totalPages}
              currentPage={pageIndex}
              setCurrentPage={setPageIndex}
            />
          </div>
        )}
      </CustomTabPanel>
      <CustomTabPanel value={tab} index={2}>
        <div className="max-h-[1360px] mb-[77px] m-auto ">
          {myScrapData?.data?.data?.totalElements === 0 ? (
            <div className="h-[600px] flex items-center justify-center">
              <MyPageEmptyView tab={3} />
            </div>
          ) : (
            <>
              {myScrapData?.data?.data?.content.map(
                (item: ProjectItemProps, idx: number) => {
                  return (
                    <div key={idx}>
                      <ProjectItem data={item} />
                    </div>
                  );
                }
              )}
            </>
          )}
        </div>

        {myScrapData?.data?.data?.totalPages > 0 && (
          <div className="flex justify-center items-center">
            <Pagination
              totalPages={myScrapData?.data?.data?.totalPages}
              currentPage={pageIndex}
              setCurrentPage={setPageIndex}
            />
          </div>
        )}
      </CustomTabPanel>
    </Box>
  );
};
