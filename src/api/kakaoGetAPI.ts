import { api } from "./api"

export const kakaoLogInAPI = {
    getKakaoLogIn: (code: string) => {
        return api.get(`/api/auth/kakao/callback`, {
            params: { code }
        })
    }
}
