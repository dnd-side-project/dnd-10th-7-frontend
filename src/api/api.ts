import axios, { AxiosInstance } from "axios";

// env에 BASE_URL 설정 필요
// 인증 값이 필요 없는 경우
export const api = axios.create({
    baseURL: process.env.BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

// 인증 값이 필요한 경우
export const authApi = ({ ContentType }: {ContentType: string}) => {
    const headers: Record<string, string> = {
        'Content-Type': ContentType,
    }
    
    // token
    const accessToken: string | null = typeof window !== "undefined" ? sessionStorage.getItem("accessToken") : "error";
    
    if (accessToken) {
        headers.accessToken = `${accessToken}`
    };

    const instance: AxiosInstance = axios.create({
        baseURL: process.env.BASE_URL,
        headers
    })

    return instance; 
}
