"use client";

import { useRouter, useSearchParams } from "next/navigation";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

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
  const router = useRouter();

  // 페이지 그룹
  const pageGroup = Math.ceil(currentPage / 5);

  // 수정된 부분: 각 페이지 그룹의 첫 번째 페이지와 마지막 페이지를 계산합니다.
  let firstIndex = (pageGroup - 1) * 5 + 1;
  let lastIndex = pageGroup * 5;
  if (lastIndex > totalPages) {
    lastIndex = totalPages;
  }

  // const next = lastIndex + 1;
  // const prev = firstIndex - 1;
  const prev = currentPage - 1;
  const next = totalPages + 1;

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
      // router.push(`/?${createQueryString("page", page)}`);
    }
  };

  const handlePrevClick = () => {
    const prev = currentPage - 1;
    if (prev >= 1) {
      setCurrentPage(prev);
      // router.push(`/?${createQueryString("page", prev)}`);
    } else {
      console.log("이전 페이지 없음");
    }
  };

  const handleNextClick = () => {
    const next = currentPage + 1;
    if (next <= totalPages) {
      setCurrentPage(next);
      // router.push(`/?${createQueryString("page", next)}`);
    } else {
      console.log("다음 페이지 없음");
    }
  };

  // console.log(totalPages, "ss");
  // console.log(prev, "prev");
  // console.log(next, "next");
  // console.log("current", currentPage);

  return (
    <div className="flex gap-4">
      <button onClick={handlePrevClick} disabled={prev < 1}>
        <KeyboardArrowLeftIcon className={prev >= 1 ? "" : "text-gray-60"} />
      </button>
      {Array.from(
        { length: totalPages === 1 ? 1 : lastIndex - firstIndex + 1 },
        (_, index) => {
          const pageNumber = firstIndex + index;
          return pageNumber === currentPage ? (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              className="flex justify-center items-center w-[32px] h-[32px] text-purple-active bg-purple-main4 rounded-full p-2"
            >
              {pageNumber}
            </button>
          ) : (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              className="w-[32px] h-[32px] bg-white flex justify-center items-center rounded-full p-2"
            >
              {pageNumber}
            </button>
          );
        }
      )}
      <button
        onClick={handleNextClick}
        className={currentPage === totalPages ? "text-gray-60" : ""}
        disabled={currentPage === totalPages}
      >
        <KeyboardArrowRightIcon />
      </button>
    </div>
  );
};

export default Pagination;
