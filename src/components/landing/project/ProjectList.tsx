"use client";

import Title from "@component/components/common-components/title";
import { Categories } from "./Categories";
import PurpleInput from "@component/components/common-components/input/PurPleInput";
import { useState } from "react";
import { ProjectTab } from "./ProjectTab";

export const ProjectList = () => {
  const [keyword, setKeyword] = useState<string>("");

  const handleChange = (e: any) => {
    setKeyword(e.target.value);
  };

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
