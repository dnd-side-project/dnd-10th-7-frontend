"use client";

import { Box, Tab, Tabs } from "@mui/material";
import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import ProjectItem from "./ProjectItem";
import clsx from "clsx";
import { ProjectItemProps } from "@component/types/Project";
import { useRouter, useSearchParams } from "next/navigation";
import Pagination from "@component/components/common-components/pagination";
import { useProjectList } from "@component/hooks/useProject";

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

export type ProjectTabProps = {
  data: ProjectItemProps[];
  isFinished: boolean;
  setIsFinished: Dispatch<SetStateAction<boolean>>;
  sort: number;
  setSort: Dispatch<SetStateAction<number>>;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  currentMenu: string | undefined;
};

export const ProjectTab = ({
  data,
  isFinished,
  setIsFinished,
  sort,
  setSort,
  currentPage,
  setCurrentPage,
  currentMenu,
}: ProjectTabProps) => {
  const [tab, setTab] = useState(0);
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleChange = (e: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  const createQueryString = useCallback(
    (name: any, value: any) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const { data: projectListData, isLoading } = useProjectList({
    field: currentMenu,
    page: currentPage,
    size: 5,
    sort: sort,
    isFinished: isFinished,
  });

  useEffect(() => {
    if (tab === 0) setIsFinished(false);
    if (tab === 1) setIsFinished(true);
  }, [tab, sort]);

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
            onClick={() => {
              setIsFinished(false);
              setCurrentPage(1);
              // router.push(`/?${createQueryString("isFinished", false)}`);
            }}
          />
          <Tab
            label="완료된 프로젝트"
            {...a11yProps(1)}
            sx={{ fontSize: "18px" }}
            onClick={() => {
              setIsFinished(true);
              setCurrentPage(1);
              // router.push(`/?${createQueryString("isFinished", true)}`);
            }}
          />
        </Tabs>
        <div className="flex gap-[20px] pr-2">
          <div
            className="flex items-center gap-[10px] cursor-pointer"
            onClick={() => setSort(0)}
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
            onClick={() => setSort(1)}
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
        <div className="max-h-[1360px] mb-[77px]">
          {data.map((item: any, idx: any) => {
            return (
              <div key={idx}>
                <ProjectItem
                  field={item.field}
                  progress={item.progress}
                  title={item.title}
                  summary={item.summary}
                  nickname={item.nickname}
                  createdAt={item.createdAt}
                  pullUpCount={item.pullUpCount}
                  likeCount={item.likeCount}
                  commentCount={item.commentCount}
                  isScrapped={item.isScrapped}
                  projectId={item.projectId}
                  profileImageUrl={item.profileImageUrl}
                />
              </div>
            );
          })}
        </div>
        {projectListData?.data?.totalPages > 0 && (
          <div className="flex justify-center items-center">
            <Pagination
              totalPages={projectListData?.data?.totalPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        )}
      </CustomTabPanel>
      <CustomTabPanel value={tab} index={1}>
        <div className="max-h-[1360px] mb-[77px]">
          {data.map((item: any, idx: any) => {
            return (
              <div key={idx}>
                <ProjectItem
                  field={item.field}
                  progress={item.progress}
                  title={item.title}
                  summary={item.summary}
                  nickname={item.nickname}
                  createdAt={item.createdAt}
                  pullUpCount={item.pullUpCount}
                  likeCount={item.likeCount}
                  commentCount={item.commentCount}
                  isScrapped={item.isScrapped}
                  projectId={item.projectId}
                  profileImageUrl={item.profileImageUrl}
                />
              </div>
            );
          })}
        </div>
        <div className="flex justify-center items-center">
          <Pagination
            totalPages={projectListData?.data?.totalPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </CustomTabPanel>
    </Box>
  );
};
