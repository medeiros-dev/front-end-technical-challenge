import { AxiosError } from "axios";
import { handleAxiosError } from "./axiosUtils";

describe("handleAxiosError", () => {
  it("logs response error", () => {
    const error: AxiosError = {
      response: {
        status: 404,
        data: "Not Found",
        headers: {},
        config: {
          //@ts-expect-error Not headers to execute the test
          headers: undefined,
        },
      },
      isAxiosError: true,
      name: "AxiosError",
      message: "Request failed with status 404",
    };

    const consoleErrorSpy = jest.spyOn(console, "error").mockImplementation();
    handleAxiosError(error);

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      "Request failed with status 404"
    );
    expect(console.error).toHaveBeenCalledWith("Not Found");
  });

  it("Should logs no response received error", () => {
    const error: AxiosError = {
      request: {},
      toJSON: jest.fn(),
      isAxiosError: true,
      name: "AxiosError",
      message: "No response received from the server",
    };

    const consoleErrorSpy = jest.spyOn(console, "error").mockImplementation();
    handleAxiosError(error);

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      "No response received from the server"
    );
  });

  it("Should logs unexpected error", () => {
    const error: AxiosError = {
      isAxiosError: true,
      toJSON: jest.fn(),
      name: "AxiosError",
      message: "Unexpected error occurred",
    };

    const consoleErrorSpy = jest.spyOn(console, "error").mockImplementation();
    handleAxiosError(error);

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      "Unexpected error:",
      "Unexpected error occurred"
    );
  });
});
