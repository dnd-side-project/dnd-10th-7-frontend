import clsx from "clsx";
import { TagProps } from ".";
import { PropsWithChildren, forwardRef } from "react";

const style: {
  base: string;
} = {
  base: "h-[32px] inline-flex justify-center items-center rounded-full px-[10px] py-[5px]",
};

const Tag = forwardRef<HTMLDivElement, PropsWithChildren<TagProps>>(
  (props, ref) => {
    const { type, status, startIcon } = props;

    return (
      <div className={clsx("flex flex-row gap-[10px]")}>
        {status && (
          <div
            className={clsx(
              style.base,
              "text-purple-active border border-purple-main1"
            )}
          >
            {status}
          </div>
        )}
        {type && (
          <div
            className={clsx(
              style.base,
              "text-blue-active border border-blue-main1"
            )}
          >
            {startIcon} {type}
          </div>
        )}
      </div>
    );
  }
);

Tag.displayName = "Tag";

export default Tag;
