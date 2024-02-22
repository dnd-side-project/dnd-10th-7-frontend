"use client";

import { useRouter, useSearchParams } from "next/navigation";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";

interface PageProps {
  totalElement?: number; // 총 데이터 개수
  pageCount: number; // 화면에 나타날 페이지 개수 : 5
  currentPage: number; // 현재 페이지
  limit: number; // 한 페이지당 나타낼 데이터 개수 : 5
  setCurrentPage: Dispatch<SetStateAction<number>>;
  totalPages: number;
}
export type PaginationProps = {
  totalPages: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
};

export const Pagination = ({
  currentPage,
  setCurrentPage,
  totalPages, // 전체 페이지 개수
}: PaginationProps) => {
  // 총 페이지 개수
  // const totalPage = Math.ceil(totalElement / limit);
  const router = useRouter();

  // 페이지 그룹
  const pageGroup = Math.ceil(currentPage / 5);

  let lastIndex = pageGroup * 5;
  if (lastIndex > totalPages) {
    lastIndex = totalPages;
  }

  let firstIndex = lastIndex - (5 - 1);

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
    if (page >= 1 && page <= totalPages) {
      console.log("handlePageChange");
      setCurrentPage(page);
      router.push(`/?${createQueryString("page", page)}`);
    }
  };

  return (
    <div className="flex gap-4">
      <button
        onClick={() => {
          if (prev <= 0) setCurrentPage(prev);
          else console.log("이전 페이지 없음");
        }}
        className="border"
      >
        이전
      </button>
      {Array.from({ length: 5 }, (_, index) => (
        <button
          key={firstIndex + index}
          onClick={() => {
            console.log("클릭", firstIndex + index);
            console.log("current", currentPage);
            setCurrentPage(firstIndex + index);
          }}
          className={firstIndex + index === currentPage ? "active" : ""}
        >
          {firstIndex + index}
        </button>
      ))}
      <button
        onClick={() => {
          if (next <= totalPages) setCurrentPage(next);
          else console.log("다음 페이지 없음");
        }}
        className="border"
      >
        다음
      </button>
    </div>
  );
};

export default Pagination;
