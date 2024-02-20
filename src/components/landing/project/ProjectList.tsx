"use client";

import Title from "@component/components/common-components/title";
import { Categories } from "./Categories";
import PurpleInput from "@component/components/common-components/input/PurPleInput";
import { useEffect, useMemo, useState } from "react";
import { ProjectTab } from "./ProjectTab";
import { useProjectList } from "@component/hooks/useProject";
import { useSearchParams } from "next/navigation";
import { NextRouter, useRouter } from "next/router";

export const ProjectList = () => {
  const [keyword, setKeyword] = useState<string>("");
  const router = useRouter();

  const searchParams = useSearchParams();

  // router 객체에 대한 타입 정의
  interface RouterWithQuery extends NextRouter {
    query: {
      keyword?: string;
      field?: string;
      page?: string;
      // 추가적으로 필요한 쿼리 파라미터가 있다면 여기에 정의
    };
  }

  // 타입 어서션을 사용하여 router의 타입을 지정
  const typedRouter = router as RouterWithQuery;

  // 나머지 코드는 이전과 동일하게 유지
  const pageKeyword = useMemo(
    () => typedRouter.query.keyword ?? "",
    [typedRouter.query.keyword]
  );

  const pageField = useMemo(
    () => `${typedRouter.query.field ?? ""}`,
    [typedRouter.query.field]
  );

  const pageIndex = useMemo(
    () => `${typedRouter.query.page ?? 1}`,
    [typedRouter.query.page]
  );

  // const pageKeyword = useMemo(
  //   () => router.query.keyword?.toString() ?? "",
  //   [router.query.keyword]
  // );

  // const pageField = useMemo(
  //   () => `${router.query.field ?? ""}`,
  //   [router.query.field]
  // );

  // const pageIndex = useMemo(
  //   () => `${router.query.page ?? 1}`,
  //   [router.query.page]
  // );

  const handleChange = (e: any) => {
    setKeyword(e.target.value);
  };

  const {
    data: projectListData,
    isLoading,
    isPlaceholderData,
  } = useProjectList({
    keyword: pageKeyword,
    field: pageField,
    // page:pageIndex,
    size: 5,
    // sort:
    // isFinished:
  });

  useEffect(() => {
    console.log("didi", projectListData);
  }, []);

  // 선택된 카테고리 ID를 저장할 상태
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // 카테고리 선택 시 호출될 콜백 함수
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category); // 선택된 카테고리 ID 저장
    // 페이지를 0으로 설정하고, 선택된 카테고리 ID를 쿼리 파라미터로 설정하여 API를 호출
    router.replace(
      { query: { ...router.query, page: 0, field: category.toString() } },
      undefined,
      { shallow: true }
    );
  };

  // {
  //   "code" : 200,
  //   "data" : {
  //     "page" : 1,
  //     "size" : 5,
  //     "totalElements" : 100,
  //     "totalPages" : 10,
  //     "content" : [ {
  //       "nickname" : "닉네임",
  //       "profileImageUrl" : "프로필 이미지",
  //       "projectId" : 1,
  //       "title" : "제목",
  //       "summary" : "한 줄 요약",
  //       "progress" : "리팩토링중",
  //       "field" : "예술/대중문화",
  //       "createdAt" : "2024.02.20",
  //       "pullUpCount" : 1,
  //       "likeCount" : 2,
  //       "commentCount" : 3,
  //       "isScrapped" : true
  //     } ]
  //   },
  //   "message" : "성공"
  //

  // const projectList = useMemo(
  //   () =>
  //     projectListData?.data?.map((item) => ({
  //       nickname: item.nickname,
  //       projectImageUrl: item.projectImageUrl,
  //       projectDivNm: item.projectDivNm,
  //       projectId: item.projectId,
  //       title: item.title,
  //       summary: item.summary,
  //       progress: item.progress,
  //       field: item.field,
  //       createdAt: item.createdAt,
  //       pullUpCount: item.pullUpCount,
  //       likeCount: item.likeCount,
  //       commentCount: item.commentCount,
  //       isScrapped: item.isScrapped,
  //     })) ?? [],
  //   [projectListData?.data]
  // );

  const updateQueryKeyword = (keyword: string) => {
    return router.replace(
      { query: { ...router.query, page: 0, keyword } },
      undefined,
      { shallow: true }
    );
  };

  return (
    <div className="flex flex-col">
      <Title>프로젝트 전체보기</Title>
      <PurpleInput
        defaultValue={pageKeyword}
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
            updateQueryKeyword(value);
          }
        }}
      />
      <div className="pt-[32px] flex">
        <Categories
          currentMenu={selectedCategory} // 선택된 카테고리 name 전달
          onMenuClick={handleCategoryClick} // 카테고리 클릭 시 호출될 콜백 함수 설정
          isLoading={isLoading}
          // onMenuClick={(menu) => {
          //   router.replace({ query: { ...router.query, page: 0, field: menu.id } }, undefined, { shallow: true });
          // }}
        />
        <ProjectTab />
      </div>
    </div>
  );
};
