'use client'

import Button from "@component/components/common-components/button/Button";
import { useRouter } from "next/navigation";

const LadingTop = () => {
    const router = useRouter();
    return (
        <div className="w-[1080px] flex flex-col items-center">
            <div className="text-title mt-[177px]">사이드 프로젝트 기획부터 론칭까지, 프로젝트를 등록하고</div>
            <div className="text-huge mt-[32px]">다양한 사람들과 피드백을 주고 받으세요!</div>
            <div className="text-title mt-[32px]">여러 분야의 서비스 유저로부터 유의미한 피드백을 받을 수 있어요.</div>
            <Button size="lg" className="mt-[64px]" onClick={() => router.push('/project/register') }>
                프로젝트 등록하기
            </Button>
        </div>
    )
}

export default LadingTop;