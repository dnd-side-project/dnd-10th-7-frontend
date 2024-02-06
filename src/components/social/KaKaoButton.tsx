import Image from "next/image";

const KaKaoButton = () => {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY
    const redirectUri = process.env.NEXT_PUBLIC_REDIRECT_URI

    const KakaoUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${apiKey}&redirect_uri=${redirectUri}&response_type=code`;

    const handleKaKaoLogin = () => {
        if (typeof window !== "undefined") {
            window.location.href = KakaoUrl;
        }
    }

    return (
        <>
            <button 
                className="bg-[#fee500] rounded-[6px] text-h2 min-w-[392px] min-h-[56px] flex justify-center items-center"
                onClick={handleKaKaoLogin}
            >
                <Image src="/assets/kakao_icon.png" alt="카카오로 시작하기" width={24} height={24} className="me-[10px]"></Image>
                <div>KaKao로 시작하기</div>
            </button>
        </>
    )
}

export default KaKaoButton;