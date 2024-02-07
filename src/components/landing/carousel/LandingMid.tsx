'use client'
import Carousel from "./Carousel";

const LandingMid = () => {
    // TODO: 로그인 구현 후 세션 스토리지에서 가져오기
    const nickname: string = "000";

    return (
        <div className="w-[1072px]">
            {nickname ? (
                // 로그인 한 유저
                <div className="text-head">{nickname}님이 관심있을 만한 프로젝트</div>
            ): (
                // 로그인 하지 않은 유저
                <div className="text-head">지금 인기있는 프로젝트</div>
            )}

            <Carousel />
        </div>
    )
}

export default LandingMid;