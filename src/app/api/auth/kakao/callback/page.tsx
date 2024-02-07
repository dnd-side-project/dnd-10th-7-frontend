'use client'

import axios from 'axios';
import { useEffect } from "react";

export const KakaoCallBack = () => {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL

    // URL에서 'code' 쿼리 파라미터 추출
    const code = new URL(window.location.href).searchParams.get('code');
    
    const getKakaoLogIn = async () => {
        await axios
            .get(`${baseUrl}/api/auth/kakao/callback?code=${code}`)
            .then((response) => {
                console.log(response)
                const access_token: string = response.data.data.accessToken;
                const refresh_token: string = response.data.data.refreshToken;
                window.sessionStorage.setItem("access_token", access_token);
                window.sessionStorage.setItem("refresh_token", refresh_token);

            })
            .catch((err) => {
                console.log(err)
            })
    }


    useEffect(() => {
        getKakaoLogIn()
    }, [])

    return <div>로딩중</div>
}

export default KakaoCallBack;