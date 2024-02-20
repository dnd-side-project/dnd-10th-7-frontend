"use client";

import Title from "@component/components/common-components/title";
import { Categories } from "./Categories";
import PurpleInput from "@component/components/common-components/input/PurPleInput";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ProjectTab } from "./ProjectTab";
import { useProjectList } from "@component/hooks/useProject";
import { useRouter, useSearchParams } from "next/navigation";
import { ProjectItemProps } from "@component/types/Project";
import { NextRouter } from "next/router";
import Link from "next/link";
// import { NextRouter, useRouter } from "next/router";

export const ProjectList = () => {
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

  const { data: projectListData, isLoading } = useProjectList({
    keyword: keyword,
    // field: pageField,
    // page:pageIndex,
    // size: 5,
    // sort:
    // isFinished:
  });

  // 선택된 카테고리 ID를 저장할 상태
  // const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // // 카테고리 선택 시 호출될 콜백 함수
  // const handleCategoryClick = (category: string) => {
  //   setSelectedCategory(category); // 선택된 카테고리 ID 저장
  //   // 페이지를 0으로 설정하고, 선택된 카테고리 ID를 쿼리 파라미터로 설정하여 API를 호출
  //   router.replace(
  //     { query: { ...router.query, page: 0, field: category.toString() } },
  //     undefined,
  //     { shallow: true }
  //   );
  // };

  const projectList = useMemo(
    () =>
      projectListData?.data?.content.map(
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

  console.log("project-list", projectList);

  const searchKeyword = (keyword: string) => {
    router.push(`/?${createQueryString("keyword", keyword)}`);
  };

  return (
    <div className="flex flex-col">
      <Title>프로젝트 전체보기</Title>
      <PurpleInput
        defaultValue={keyword}
        onChange={handleChange}
        placeholder="관심있는 키워드로 프로젝트를 찾아보세요!"
        shape="smallRounded"
        size="xl"
        textSize="md"
        borderSize="md"
        backgroundColors="white"
        search={true}
        onKeyDown={(e) => {
          const { value } = e.currentTarget;

          if (e.key === "Enter") {
            searchKeyword(value);
          }
        }}
      />
      <div className="pt-[32px] flex">
        {/* <Categories
          currentMenu={selectedCategory} // 선택된 카테고리 name 전달
          onMenuClick={handleCategoryClick} // 카테고리 클릭 시 호출될 콜백 함수 설정
          isLoading={isLoading}
          // onMenuClick={(menu) => {
          //   router.replace({ query: { ...router.query, page: 0, field: menu.id } }, undefined, { shallow: true });
          // }}
        /> */}
        <ProjectTab data={projectList} />
      </div>
    </div>
  );
};
