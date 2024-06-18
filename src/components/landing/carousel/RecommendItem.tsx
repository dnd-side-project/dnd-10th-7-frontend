import Image from "next/image";
import Tag from "@component/components/common-components/tag/Tag";
import { useRouter } from "next/navigation";
import { RecommendDataType } from "./Carousel.types";

const RecommendItem = ({
  projectId,
  field,
  progress,
  title,
  summary,
  profileImageUrl,
  createdBy,
  createdAt,
}: RecommendDataType) => {
  const router = useRouter();
  return (
    <>
      <div
        className="w-[344px] h-[340px] rounded-[10px] border border-[1.5px] border-purple-main1 bg-purple-main5 flex justify-center items-center cursor-pointer"
        onClick={() => {
          router.push(`/project/${projectId}`);
        }}
      >
        <div className="w-[261px] h-[296.93px] relative">
          <Tag type={field} status={progress} />
          <div className="text-title mt-[12px] mb-[24px]">{title}</div>
          <div className="text-body1 text-gray-60 font-medium">{summary}</div>
          <div className="absolute bottom-0 flex items-center">
            <Image
              src={profileImageUrl}
              alt="임시 프로필 이미지"
              width={20}
              height={20}
              className="w-[20px] h-[20px] rounded-full me-[10px]"
            />
            <div className="text-body1 text-gray-60 me-[24px] font-medium">
              {createdBy}
            </div>
            <div className="text-body1 text-gray-60 font-medium">
              {createdAt}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecommendItem;
