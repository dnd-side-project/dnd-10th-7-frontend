import { api } from "./api";

export const GoogleLogInAPI = {
  getGoogleLogIn: (code: string) => {
    return api.get(`/api/auth/google/callback`, {
      params: { code },
    });
  },
};
