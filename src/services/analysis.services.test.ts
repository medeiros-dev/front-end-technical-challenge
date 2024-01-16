import axios from "axios";
import { getAnalysisData, getFeatureList } from ".";
import MockAdapter from "axios-mock-adapter";
import { getURL } from "../api/provider";

jest.mock("../api/provider", () => ({
  getURL: jest.fn(),
}));

const API_URL = getURL();
const mockAxios = new MockAdapter(axios);

describe("FeatureList services - Success", () => {
  it("Should handle successful data fetching", async () => {
    const mockData = [{ value: "mockedValue" }];
    mockAxios
      .onGet(`${API_URL}analysis?insight_name=feature_list`)
      .reply(200, mockData);

    const result = await getFeatureList();

    expect(result).toEqual("mockedValue");
  });
});

describe("FeatureList services - Error", () => {
  it("Should handle data fetching error", async () => {
    mockAxios
      .onGet(`${API_URL}analysis?insight_name=feature_list`)
      .reply(500, { error: "Internal Server Error" });

    try {
      await getFeatureList();
      fail("Expected an error to be thrown");
    } catch (error) {
      if (error instanceof Error) {
        expect(error.message).toEqual("Request failed with status code 500");
      }
    }
  });
});

describe("Analysis services - Success", () => {
  it("Should handle successful data fetching", async () => {
    mockAxios
      .onGet(`${API_URL}analysis?insight_name=variable_ranking`)
      .reply(200, { data: "mockedData" });

    const result = await getAnalysisData();

    expect(result).toEqual({ data: "mockedData" });
  });
});

describe("Analysis services - Error", () => {
  it("Should handle data fetching error", async () => {
    mockAxios
      .onGet(`${API_URL}analysis?insight_name=variable_ranking`)
      .reply(500, { error: "Internal Server Error" });

    try {
      await getAnalysisData();
      fail("Expected an error to be thrown");
    } catch (error) {
      if (error instanceof Error) {
        expect(error.message).toEqual("Request failed with status code 500");
      }
    }
  });
});
