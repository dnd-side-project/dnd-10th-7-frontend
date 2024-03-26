import { PropsWithChildren, forwardRef, HTMLAttributes } from "react";

const Title = forwardRef<
  HTMLDivElement,
  PropsWithChildren<HTMLAttributes<HTMLDivElement>>
>(({ children, className, ...rest }, ref) => {
  return (
    <div className={`w-[1080px] text-head ${className}`} {...rest} ref={ref}>
      {children}
    </div>
  );
});

Title.displayName = "Title";

export default Title;
