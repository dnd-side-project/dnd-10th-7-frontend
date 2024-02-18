import { twMerge } from "tailwind-merge";
import { variants } from "./Modal";

// 모달 내부 Footer 컴포넌트 (모달하단: 확인/취소 버튼 등)
export function ModalFooter({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={twMerge(variants.footer, className)}>{children}</div>;
}
