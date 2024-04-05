import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { SkeletonStyleProps } from ".";
import "react-loading-skeleton/dist/skeleton.css";

export interface SkeletonProps extends SkeletonStyleProps {
  count?: number;
  className?: string;
}

export const CustomSkeleton = ({
  count = 1,
  className: customClassName,
  width = 20,
  height,
}: SkeletonProps) => {
  return (
    <div className="border border-red-500">
      <SkeletonTheme baseColor="#ebebeb" highlightColor="#f5f5f5">
        <p>
          <Skeleton count={count} width={width} height={height} />
        </p>
      </SkeletonTheme>
    </div>
  );
};

export default CustomSkeleton;
