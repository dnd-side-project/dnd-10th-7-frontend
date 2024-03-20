"use client";

import Title from "@component/components/common-components/title";
import PurpleInput from "@component/components/common-components/input/PurPleInput";
import { useCallback, useMemo, useState } from "react";
import { useProjectList } from "@component/hooks/useProject";
import { useRouter, useSearchParams } from "next/navigation";
import { ProjectItemProps } from "@component/types/Project";
import { ProjectTab } from "./ProjectTab";
import { Categories } from "./Categories";

export function ProjectList() {
  const [keyword, setKeyword] = useState<string>("");
  const router = useRouter();

  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: any, value: any) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const handleChange = (e: any) => {
    setKeyword(e.target.value);
  };

  const [currentMenu, setCurrentMenu] = useState<string>();
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [sort, setSort] = useState(0);

  // 페이지 인덱스
  const [pageIndex, setPageIndex] = useState(1);

  const { data: projectListData, isLoading } = useProjectList({
    keyword,
    field: currentMenu,
    page: pageIndex,
    size: 5,
    sort,
    isFinished,
  });

  // // 카테고리 선택 시 호출될 콜백 함수
  const handleMenuClick = (category: string) => {
    setCurrentMenu(category); // 선택된 카테고리 ID 저장
    // router.push(`/?${createQueryString("field", category)}`);
  };

  const projectList = useMemo(
    () =>
      projectListData?.data?.data?.content.map(
        (item: ProjectItemProps) =>
          ({
            commentCount: item.commentCount,
            createdAt: item.createdAt,
            field: item.field,
            isScrapped: item.isScrapped,
            likeCount: item.likeCount,
            nickname: item.nickname,
            profileImageUrl: item.profileImageUrl,
            progress: item.progress,
            projectId: item.projectId,
            title: item.title,
            summary: item.summary,
            pullUpCount: item.pullUpCount,
          }) as ProjectItemProps
      ) ?? [],
    [projectListData?.data]
  );

  console.log("상단에서의 데이터", projectListData);

  const searchKeyword = (keyword: string) => {
    setKeyword(keyword);
    router.push(`/?${createQueryString("keyword", keyword)}`);
  };

  return (
    <div className="flex flex-col">
      <Title className="py-8">프로젝트 전체보기</Title>
      <PurpleInput
        defaultValue={keyword}
        onChange={handleChange}
        placeholder="관심있는 키워드로 프로젝트를 찾아보세요!"
        shape="smallRounded"
        size="xl"
        textSize="md"
        borderSize="md"
        backgroundColors="white"
        search
        onKeyDown={(e) => {
          const { value } = e.currentTarget;

          if (e.key === "Enter") {
            searchKeyword(value);
          }
        }}
      />
      <div className="pt-[32px] flex">
        <Categories
          currentMenu={currentMenu ?? null} // 선택된 카테고리 name 전달
          onMenuClick={handleMenuClick} // 카테고리 클릭 시 호출될 콜백 함수 설정
          isLoading={isLoading}
        />
        <ProjectTab
          data={projectList}
          isFinished={isFinished}
          setIsFinished={setIsFinished}
          sort={sort}
          setSort={setSort}
          currentPage={pageIndex}
          setCurrentPage={setPageIndex}
          currentMenu={currentMenu ?? undefined}
        />
      </div>
    </div>
  );
}
