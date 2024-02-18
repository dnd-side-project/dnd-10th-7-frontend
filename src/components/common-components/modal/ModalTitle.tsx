import { twMerge } from "tailwind-merge";
import { variants } from "./Modal";

// 모달 Title 컴포넌트(모달의 상단 타이틀)
export function ModalTitle({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={twMerge(variants.title, className)}>{children}</div>;
}
