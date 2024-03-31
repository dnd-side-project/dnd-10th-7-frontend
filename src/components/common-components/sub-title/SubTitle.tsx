import { PropsWithChildren, forwardRef } from "react";

export type SubTitleProps = {
  title: string;
  className?: string;
};

const SubTitle = forwardRef<HTMLDivElement, PropsWithChildren<SubTitleProps>>(
  ({ children, title, className }, ref) => {
    return (
      <div
        className={`w-3/5 max-w-[600px] flex flex-col gap-4 py-[8px] text-title text-gray-80 ${className}`}
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

SubTitle.defaultProps = {
  className: "",
};

export default SubTitle;
