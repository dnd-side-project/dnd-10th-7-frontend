import { useEffect, useState } from "react";
import { DropdownBoxPlace, DropdownBoxProps } from "./DropdownBox.types";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import CheckModal from "@component/components/alert-modal/CheckModal";
import {
  usePullUpMutation,
  useDeleteMutation,
} from "@component/hooks/useProject";

const style: {
  base: string;
  place: Record<DropdownBoxPlace, string>;
} = {
  base: "top-10 absolute right-0 w-[200px] z-20 bg-white flex flex-col border rounded-[16px] cursor-pointer",
  place: {
    left: "",
    center: "",
    right: "",
  },
};

const DropdownBox = ({
  items,
  place,
  className,
  projectId,
  setIsOpen,
}: DropdownBoxProps) => {
  const [hoverMenu, setHoverMenu] = useState<string | null>(null);
  const router = useRouter();

  const [deleteOpen, setDeleteOpen] = useState<boolean>(false);
  const [pullUpOpen, setpullUpOpen] = useState<boolean>(false);
  const { deleteMutate } = useDeleteMutation(projectId);
  const { pullUpMutate } = usePullUpMutation(projectId);

  const onClick = (item: string) => {
    if (item === "마이페이지") {
      router.push("/mypage");
      setIsOpen(false);
    }
    if (item === "로그아웃") {
      sessionStorage.removeItem("accessToken");
      sessionStorage.removeItem("refreshToken");
      router.push("/");
      window.location.reload();
    }
    if (item === "수정하기") router.push(`/project/edit/${projectId}`);
    if (item === "삭제하기") {
      setIsOpen(false);

      setTimeout(() => {
        setDeleteOpen(true);
      }, 1000);
    }
    if (item === "끌올하기") {
      setpullUpOpen(true);
    }
  };

  useEffect(() => {
    if (pullUpOpen) {
      document.body.style.cssText='overflow:visible;';}
  }, [pullUpOpen])

  return (
    <div
      className={clsx(style.base, className)}
      style={{
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
      }}
      onBlur={() => setIsOpen(false)}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          onClick={() => onClick(item)}
          onMouseEnter={() => setHoverMenu(item)}
          onMouseLeave={() => setHoverMenu(null)}
          className={clsx(
            hoverMenu === item && "text-purple-main1",
            "transition duration-100 ease-in-out cursor-pointer px-5 py-3",
            style.place[place]
          )}
        >
          {item}
        </div>
      ))}
      <CheckModal
        isOpen={deleteOpen}
        setIsOpen={setDeleteOpen}
        title="프로젝트를 삭제하시겠습니까?"
        subTitle="삭제하기"
        mutate={deleteMutate}
      />
      <CheckModal
        isOpen={pullUpOpen}
        setIsOpen={setpullUpOpen}
        title="프로젝트를 끌올하시겠습니까?"
        subTitle="끌올하기"
        mutate={pullUpMutate}
      />
    </div>
  );
};

export default DropdownBox;
