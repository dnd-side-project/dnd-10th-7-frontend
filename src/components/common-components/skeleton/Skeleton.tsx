import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export const CustomSkeleton = () => {
  return (
    <div className="border border-red-500">
      <SkeletonTheme baseColor="#ebebeb" highlightColor="#f5f5f5">
        <p>
          <Skeleton count={3} width={200} />
        </p>
      </SkeletonTheme>
    </div>
  );
};

export default CustomSkeleton;
