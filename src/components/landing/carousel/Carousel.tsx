import RecommendItem from "./RecommendItem";
import { TagProps } from "@component/components/common-components/tag";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

// 캐러셀 화살표
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

export type RecommendPropsType = {
    projectId: number;
    title: string;
    content: string;
    nickname: string;
    profileImg: string;
    progress: TagProps['status'];
    createdAt: string;
    fields: TagProps['type'];
}


const recommendData: RecommendPropsType[] = [  
    {
        "projectId": 1,
        "title": "팅클(Tincle) - 우리들만의 피드 폐쇄형 SNS 서비스",
        "content": "우리들만의 피드, 팅클 당신이 정말 편안하게 친구들과 연결될 수 있는 공간을 만들어 드릴게요.",
        "nickname": "철수",
        "profileImg": "/assets/profile_img.png",
        "progress" : "기획중",
        "createdAt" : "2023-11-13",
        "fields": "예술/대중문화"
    },
    {
        "projectId": 2,
        "title": "팅클(Tincle) - 우리들만의 피드 폐쇄형 SNS 서비스",
        "content": "우리들만의 피드, 팅클 당신이 정말 편안하게 친구들과 연결될 수 있는 공간을 만들어 드릴게요.",
        "nickname": "철수",
        "profileImg": "/assets/profile_img.png",
        "progress" : "기획중",
        "createdAt" : "2023-11-13",
        "fields": "예술/대중문화"
    },
    {
        "projectId": 3,
        "title": "팅클(Tincle) - 우리들만의 피드 폐쇄형 SNS 서비스",
        "content": "우리들만의 피드, 팅클 당신이 정말 편안하게 친구들과 연결될 수 있는 공간을 만들어 드릴게요.",
        "nickname": "철수",
        "profileImg": "/assets/profile_img.png",
        "progress" : "기획중",
        "createdAt" : "2023-11-13",
        "fields": "예술/대중문화"
    },
    {
        "projectId": 4,
        "title": "팅클(Tincle) - 우리들만의 피드 폐쇄형 SNS 서비스",
        "content": "우리들만의 피드, 팅클 당신이 정말 편안하게 친구들과 연결될 수 있는 공간을 만들어 드릴게요.",
        "nickname": "철수",
        "profileImg": "/assets/profile_img.png",
        "progress" : "기획중",
        "createdAt" : "2023-11-13",
        "fields": "예술/대중문화"
    },
    {
        "projectId": 5,
        "title": "팅클(Tincle) - 우리들만의 피드 폐쇄형 SNS 서비스",
        "content": "우리들만의 피드, 팅클 당신이 정말 편안하게 친구들과 연결될 수 있는 공간을 만들어 드릴게요.",
        "nickname": "철수",
        "profileImg": "/assets/profile_img.png",
        "progress" : "기획중",
        "createdAt" : "2023-11-13",
        "fields": "예술/대중문화"
    },
    {
        "projectId": 6,
        "title": "팅클(Tincle) - 우리들만의 피드 폐쇄형 SNS 서비스",
        "content": "우리들만의 피드, 팅클 당신이 정말 편안하게 친구들과 연결될 수 있는 공간을 만들어 드릴게요.",
        "nickname": "철수",
        "profileImg": "/assets/profile_img.png",
        "progress" : "기획중",
        "createdAt" : "2023-11-13",
        "fields": "예술/대중문화"
    },
]

interface ArrowProps {
    onClick: () => void;
}

const PrevArrow = ({ onClick }: any) => {
    return <ArrowBackIosNewRoundedIcon onClick={onClick} className="absolute left-[-45px] top-[156px] cursor-pointer" fontSize="large" sx={{ color: '#999999'}} />;
};

const NextArrow = ({ onClick }: any) => {
    return <ArrowForwardIosRoundedIcon onClick={onClick} className="absolute right-[-45px] top-[156px] cursor-pointer" fontSize="large" sx={{ color: '#999999'}} />;
};


const settings = {
    arrows: true,   // 화살표 생성
    dots: false,     // 슬라이드 개수 점 형태로 표시
    infinite: true, 
    slidesToShow: 3,    // 화면에 한 번에 표시할 슬라이드 개수 설정
    slidesToScroll: 3,  // 다음 보여 줄 슬라이드의 개수 설정
    speed: 2000,         // 화면을 넘길 때 속도
    autoplay: true,         // 자동 넘김
    autoplaySpeed: 5000,    // 간격
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
}




const Carousel = () => {
    return (
        <>
            <Slider {...settings} className="mt-[32.5px]">                                                                   
                {recommendData?.map((item) => (
                    <RecommendItem
                        key={item.projectId}
                        projectId={item.projectId}
                        fields={item.fields}
                        progress={item.progress}
                        title={item.title}
                        content={item.content}
                        profileImg={item.profileImg}
                        nickname={item.nickname}
                        createdAt={item.createdAt}
                    />
                ))}
            </Slider>
        </>
    )
}

export default Carousel;