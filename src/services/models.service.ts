import axios, { AxiosResponse } from "axios";
import { getUrl } from "../api/provider";
import { handleAxiosError } from "../utils/axiosUtils";

export const getModels: () => Promise<ModelsResponseItem[]> = async () => {
  try {
    const response: AxiosResponse<ModelsResponseItem[]> = await axios.get(
      `${getUrl()}models`
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      handleAxiosError(error);
    } else {
      console.error("Unexpected error:", error);
    }
    throw error;
  }
};
