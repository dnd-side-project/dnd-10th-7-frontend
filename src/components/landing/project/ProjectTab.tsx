"use client";

import { Box, Tab, Tabs } from "@mui/material";
import React, {
  Dispatch,
  SetStateAction,
  use,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import ProjectItem from "./ProjectItem";
import { LinkedCamera } from "@mui/icons-material";
import { TagProps } from "@component/components/common-components/tag";
import clsx from "clsx";
import { ProjectItemProps } from "@component/types/Project";
import { useRouter, useSearchParams } from "next/navigation";
import { NextRouter } from "next/router";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
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
};

export const ProjectTab = ({
  data,
  isFinished,
  setIsFinished,
  sort,
  setSort,
  currentPage,
  setCurrentPage,
}: ProjectTabProps) => {
  const [tab, setTab] = useState(0);
  const router = useRouter();
  const searchParams = useSearchParams();

  // // router 객체에 대한 타입 정의
  // interface RouterWithQuery extends AppRouterInstance {
  //   query: {
  //     keyword?: string;
  //     field?: string;
  //     page?: string;
  //     sort?: number;
  //     isFinished?: boolean;
  //     // 추가적으로 필요한 쿼리 파라미터가 있다면 여기에 정의
  //   };
  // }

  // // // 타입 어서션을 사용하여 router의 타입을 지정
  // const typedRouter = router as RouterWithQuery;

  // // // 나머지 코드는 이전과 동일하게 유지
  // const pageIsFinished = useMemo(
  //   () => typedRouter.query.isFinished ?? "",
  //   [typedRouter.query.isFinished]
  // );

  // 정렬 - 0은 최신순, 1은 인기순
  // const [sort, setSort] = useState(0);

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

  const handleSorting = (sortingType: number) => {
    setSort(sortingType);
    if (sortingType === 0) {
      setSort(0);
      // 근데 이거 아래 url 안바꿔줘도 잘 실행은 됨
      router.push(`?${createQueryString("sort", 0)}`);
    }
    if (sortingType === 1) {
      setSort(1);
      router.push(`?${createQueryString("sort", 1)}`);
    }
  };

  // const handleSorting = (sortingType: number) => {
  //   setSort(sortingType);
  //   if(sortingType===0) {

  //   }
  // };
  // const [pageIndex, setPageIndex] = useState(1);
  // const [isFinished, setIsFinished] = useState<boolean>(false);

  const {
    data: projectListData,
    isLoading,
    refetch,
  } = useProjectList({
    // field: pageField,
    page: currentPage,
    size: 5,
    sort: sort,
    isFinished: isFinished,
  });

  // console.log("what", isFinished);
  console.log("projectTab", projectListData);

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
              router.push(`/?${createQueryString("isFinished", false)}`);
            }}
          />
          <Tab
            label="완료된 프로젝트"
            {...a11yProps(1)}
            sx={{ fontSize: "18px" }}
            onClick={() => {
              setIsFinished(true);
              router.push(`/?${createQueryString("isFinished", true)}`);
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
        {/* TODO : 이런식으로 구현..! */}
        <button onClick={() => setCurrentPage(1)}>0</button>
        <button onClick={() => setCurrentPage(2)}>1</button>
        <button onClick={() => setCurrentPage(3)}>2</button>
        <button onClick={() => setCurrentPage(4)}>3</button>

        {/* <Pagination
          // totalElement={projectListData?.totalElement}
          totalPages={projectListData?.totalPages}
          pageCount={5}
          currentPage={}
          setCurrentPage={setPageIndex}
          limit={5}
        /> */}
      </CustomTabPanel>
      <CustomTabPanel value={tab} index={1}>
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
      </CustomTabPanel>
    </Box>
  );
};
