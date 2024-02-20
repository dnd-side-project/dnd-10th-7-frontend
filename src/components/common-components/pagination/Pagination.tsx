"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

interface PageProps {
  totalElement: number; // 총 데이터 개수
  pageCount: number; // 화면에 나타날 페이지 개수 : 5
  currentPage: number; // 현재 페이지
  limit: number; // 한 페이지당 나타낼 데이터 개수 : 5
}

export const Pagination = ({
  totalElement,
  pageCount,
  currentPage,
  limit,
}: PageProps) => {
  // 총 페이지 개수
  const totalPage = Math.ceil(totalElement / limit);
  const router = useRouter();

  // 페이지 그룹
  const pageGroup = Math.ceil(currentPage / pageCount);

  let lastIndex = pageGroup * pageCount;
  if (lastIndex > totalPage) {
    lastIndex = totalPage;
  }

  let firstIndex = lastIndex - (pageCount - 1);

  const next = lastIndex + 1;
  const prev = firstIndex - 1;

  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: any, value: any) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  // 페이지 변경 함수
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPage) {
      // 페이지 이동
      console.log("hissss");
      router.push(`/?${createQueryString("page", page)}`);
    }
  };

  return (
    <div className="flex gap-4">
      <button onClick={() => handlePageChange(prev)}>이전</button>
      {Array.from({ length: pageCount }, (_, index) => (
        <button
          key={firstIndex + index}
          onClick={() => {
            console.log("ff", firstIndex + index);
            handlePageChange(firstIndex + index);
          }}
          className={firstIndex + index === currentPage ? "active" : ""}
        >
          {firstIndex + index}
        </button>
      ))}
      <button onClick={() => handlePageChange(next)}>다음</button>
    </div>
  );
};

export default Pagination;
