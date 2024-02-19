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

  return (
    <div className="flex flex-col">
      <Title>프로젝트 전체보기</Title>
      <PurpleInput
        value={keyword}
        onChange={handleChange}
        placeholder="관심있는 키워드로 프로젝트를 찾아보세요!"
        shape="smallRounded"
        size="xl"
        textSize="md"
        borderSize="md"
        backgroundColors="white"
        search={true}
      />
      <div className="pt-[32px] flex">
        <Categories />
        <ProjectTab />
      </div>
    </div>
  );
};
