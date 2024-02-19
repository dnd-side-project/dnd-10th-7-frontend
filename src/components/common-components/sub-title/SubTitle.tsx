import clsx from "clsx";
import { PropsWithChildren, forwardRef } from "react";

export type SubTitleProps = {
  title: string;
  className?: string;
};

const SubTitle = forwardRef<HTMLDivElement, PropsWithChildren<SubTitleProps>>(
  ({ children, title, className }, ref) => {
    return (
      <div
        className={clsx(
          "w-3/5 max-w-[600px] flex flex-col gap-4 py-[8px] text-title text-gray-80"
        )}
        ref={ref}
      >
        {title}
        <div className="flex flex-col gap-3 text-body1 font-medium w-[787px]">
          {children}
        </div>
      </div>
    );
  }
);

SubTitle.displayName = "SubTitle";

export default SubTitle;
