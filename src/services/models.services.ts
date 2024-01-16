import axios, { AxiosResponse } from "axios";
import { getURL } from "../api/provider";
import { handleAxiosError } from "../utils/axiosUtils";

export const getModels: () => Promise<ModelsResponseItem[]> = async () => {
  try {
    const response: AxiosResponse<ModelsResponseItem[]> = await axios.get(
      `${getURL()}models`
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      handleAxiosError(error);
    }
    throw error;
  }
};
