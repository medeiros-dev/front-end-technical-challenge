import axios, { AxiosResponse } from "axios";

export const getModels: () => Promise<ModelsResponseItem[]> = async () => {
  try {
    const response: AxiosResponse<ModelsResponseItem[]> = await axios.get(
      `http://localhost:5000/models`
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        console.error(`Request failed with status ${error.response.status}`);
        console.error(error.response.data);
      } else if (error.request) {
        console.error("No response received from the server");
      } else {
        console.error("Error setting up the request:", error.message);
      }
    } else {
      console.error("Unexpected error:", error);
    }
    throw error;
  }
};
