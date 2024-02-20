import axios, { AxiosResponse } from "axios";
import { BASE_URL, api, authApi } from "./api";
import { ProjectPageParams } from "@component/types/api";

export const projectAPI = {
  getProjectList: async (params?: ProjectPageParams, accessToken?: string) => {
    try {
      const res: AxiosResponse = await axios.get(`${BASE_URL}/api/projects`, {
        // headers: {
        //   Authorization: `Bearer ${accessToken}`,
        // },
        params,
      });
      return res.data;
    } catch (err) {
      console.error(err);
    }
  },
};
