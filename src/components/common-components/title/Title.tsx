import { PropsWithChildren, forwardRef } from "react";

// export type TitleProps = {
//   title: string;
// };

const Title = forwardRef<HTMLDivElement, PropsWithChildren>(
  ({ children }, ref) => {
    return (
      <div className="w-[1080px] py-[32px] text-head" ref={ref}>
        {children}
      </div>
    );
  }
);

Title.displayName = "Title";

export default Title;
