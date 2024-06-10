"use client";
import RecommendItem from "./RecommendItem";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useGetProjectRecommend } from "@component/hooks/useProject";
import { TagProps } from "@component/components/common-components/tag";

// 캐러셀 화살표
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

export interface RecommendData {
  createdAt: string;
  createdBy: string;
  field: TagProps['type'];
  profileImageUrl: string;
  progress: TagProps['status'];
  projectId: number;
  summary: string;
  title: string;
}

const PrevArrow = ({ onClick }: any) => {
  return (
    <ArrowBackIosNewRoundedIcon
      onClick={onClick}
      className="absolute left-[-45px] top-[156px] cursor-pointer hover:text-black text-gray-400"
      fontSize="large"
    />
  );
};

const NextArrow = ({ onClick }: any) => {
  return (
    <ArrowForwardIosRoundedIcon
      onClick={onClick}
      className="absolute right-[-45px] top-[156px] cursor-pointer hover:text-black text-gray-400"
      fontSize="large"
    />
  );
};

const settings = {
  arrows: true, // 화살표 생성
  dots: false, // 슬라이드 개수 점 형태로 표시
  infinite: true,
  slidesToShow: 3, // 화면에 한 번에 표시할 슬라이드 개수 설정
  slidesToScroll: 3, // 다음 보여 줄 슬라이드의 개수 설정
  speed: 2000, // 화면을 넘길 때 속도
  autoplay: false,
  autoplaySpeed: 5000, // 간격
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const Carousel = () => {
  const { data, error, isLoading } = useGetProjectRecommend();
  const [recommendData, setRecommendData] = useState<RecommendData[]>();

  useEffect(() => {
    if (data) {
      setRecommendData(data.data.data);
    }
  }, [data]);

  if (isLoading || error) {
    return (
      <Slider {...settings} className="mt-[32.5px]">
        {[...Array(3)].map((_, index) => (
          <div>
            <div className="w-[344px] h-[340px] rounded-[10px] border border-[1.5px] border-purple-main1 bg-purple-main5 flex justify-center items-center"></div>
          </div>
        ))}
      </Slider>
    );
  }
  return (
    <>
      <Slider {...settings} className="mt-[32.5px]">
        {recommendData?.map((item: RecommendData) => (
          <RecommendItem
            key={item.projectId}
            projectId={item.projectId}
            fields={item.field}
            progress={item.progress}
            title={item.title}
            content={item.summary}
            profileImg={item.profileImageUrl}
            nickname={item.createdBy}
            createdAt={item.createdAt}
          />
        ))}
      </Slider>
    </>
  );
};

export default Carousel;
