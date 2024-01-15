import { AxiosError } from "axios";

export const handleAxiosError = (error: AxiosError): void => {
  if (error.response) {
    console.error(`Request failed with status ${error.response.status}`);
    console.error(error.response.data);
  } else if (error.request) {
    console.error("No response received from the server");
  } else {
    console.error("Error setting up the request:", error.message);
  }
};
