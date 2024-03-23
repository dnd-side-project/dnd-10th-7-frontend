import { twMerge } from "tailwind-merge";
import { variants } from "./Modal";

// 모달 SubTitle 컴포넌트(모달의 상단 서브 타이틀)
export default function ModalSubTitle({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={twMerge(variants.subTitle, className)}>{children}</div>
  );
}

ModalSubTitle.defaultProps = {
  className: "",
};
