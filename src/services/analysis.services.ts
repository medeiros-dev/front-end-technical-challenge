import axios, { AxiosResponse } from "axios";
import { handleAxiosError } from "../utils/axiosUtils";
import { getURL } from "../api/provider";

export const getFeatureList: () => Promise<FeatureList> = async () => {
  try {
    const response: AxiosResponse<FeatureList[]> = await axios.get(
      `${getURL()}analysis?insight_name=feature_list`
    );
    //@ts-expect-error Hard coded beceusa a lack of contract in the reponse API
    return response.data[0].value;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      handleAxiosError(error);
    } else {
      console.error("Unexpected error:", error);
    }
    throw error;
  }
};

export const getAnalysisData: () => Promise<AnalysisItem[]> = async () => {
  try {
    const response: AxiosResponse<AnalysisItem[]> = await axios.get(
      `${getURL()}analysis?insight_name=variable_ranking`
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