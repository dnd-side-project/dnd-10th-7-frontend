import Image from "next/image";
import styles from './styles.module.css';

const ProjectDetailImage = ({ projectImgUrl }: any) => {


  return (
    <div className={`flex overflow-x-auto max-w-[785px] ${styles["scroll-container"]}`}>
      {projectImgUrl?.map((img: string, index: string) => (
        <div key={index} className="flex-shrink-0 mr-4 mb-4">
          <Image
            src={img}
            alt={index}
            width={267}
            height={200}
            className="object-cover rounded-[5px] w-[267px] h-[200px]"
          ></Image>
        </div>
      ))}
    </div>
  );
};

export default ProjectDetailImage;
