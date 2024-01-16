import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { getModels } from ".";
import { getURL } from "../api/provider";

jest.mock("../api/provider", () => ({
  getURL: jest.fn(),
}));

const API_URL = getURL();
const mockAxios = new MockAdapter(axios);

describe("getModels", () => {
  afterEach(() => {
    mockAxios.reset();
  });

  it("fetches models successfully from API", async () => {
    const responseData = [
      {
        model_version: 1,
        ts_start: 1703091540.9751942,
        ts_end: 1703091934.965811,
        num_categorical: 0,
        job_id: "126897e6-9f59-ab67",
        model_type: "Regression",
        num_continuous: 4,
        model_name: "Cortana",
        sk: "MD#2AB9E28F-4549-BFBF",
        ts_updated: 1703091934.965811,
        pk: 1,
      },
    ];
    mockAxios.onGet(`${API_URL}models`).reply(200, responseData);

    const result = await getModels();

    expect(result).toEqual(responseData);
  });

  it("handles Axios error", async () => {
    mockAxios
      .onGet(`${API_URL}models`)
      .reply(500, { error: "Internal Server Error" });

    try {
      await getModels();
      fail("Expected an error to be thrown");
    } catch (error) {
      if (error instanceof Error) {
        expect(error.message).toEqual("Request failed with status code 500");
      }
    }
  });
});
