import { TitleData } from "@component/types/Sendback";
import Tag from "@component/components/common-components/tag/Tag";

const ProjectSendbackTitleData = ({ title, field, process }: TitleData) => {
  return (
    <div className="mt-16">
      <Tag type={field} status={process} />
      <div className="mt-4 text-head">{title}</div>
    </div>
  );
};

export default ProjectSendbackTitleData;