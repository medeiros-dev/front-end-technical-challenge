import { makeChartData, makeModelList, makePercentage } from "./dataConversion";

const MOCK_MODEL_RESPONSE: ModelsResponseItem[] = [
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
  },
];

const EXPECTED_MODEL_LIST_ITEM: ModelListItem[] = [
  {
    id: "126897e6-9f59-ab67",
    name: "Cortana",
    type: "Regression",
  },
];

const MOCK_FEATURE_LIST: FeatureList = [
  "SepalLengthCm",
  "SepalWidthCm",
  "PetalLengthCm",
  "PetalWidthCm",
];

const MOCK_ANALYSIS_ITEM_ARR: AnalysisItem[] = [
  {
    origin: "sd_cm",
    value: {
      PetalWidthCm: 0.35805864148438127,
      SepalWidthCm: 0.06840044886502064,
      PetalLengthCm: 0.36509329889013475,
      SepalLengthCm: 0.20844761076046325,
    },
    insight_name: "variable_ranking",
    name: "sd_cm_variable_ranking",
  },
  {
    origin: "td_cm",
    value: {
      PetalWidthCm: 0.30667604501235934,
      SepalWidthCm: 0.14623438697581495,
      PetalLengthCm: 0.37298511548927343,
      SepalLengthCm: 0.17410445252255233,
    },
    insight_name: "variable_ranking",
    name: "td_cm_variable_ranking",
  },
  {
    origin: "td",
    value: {
      PetalWidthCm: 0.5031687260884115,
      SepalWidthCm: 0,
      PetalLengthCm: 0.49683127391158854,
      SepalLengthCm: 0,
    },
    insight_name: "variable_ranking",
    name: "td_variable_ranking",
  },
];

const EXPECTED_CHART_DATA_ARR = [
  {
    name: "SepalLengthCm",
    sd_cm_variable_ranking: "20.84",
    td_cm_variable_ranking: "17.41",
    td_variable_ranking: "0.00",
  },
  {
    name: "SepalWidthCm",
    sd_cm_variable_ranking: "6.84",
    td_cm_variable_ranking: "14.62",
    td_variable_ranking: "0.00",
  },
  {
    name: "PetalLengthCm",
    sd_cm_variable_ranking: "36.51",
    td_cm_variable_ranking: "37.30",
    td_variable_ranking: "49.68",
  },
  {
    name: "PetalWidthCm",
    sd_cm_variable_ranking: "35.81",
    td_cm_variable_ranking: "30.67",
    td_variable_ranking: "50.32",
  },
];

describe("Make Model List", () => {
  it("Should return expected model list", () => {
    expect(makeModelList(MOCK_MODEL_RESPONSE)).toEqual(
      EXPECTED_MODEL_LIST_ITEM
    );
  });

  it("Should return empty data", () => {
    expect(makeModelList([])).toEqual([]);
  });
});

describe("Make chart data", () => {
  it("Should return expected chart data", () => {
    expect(makeChartData(MOCK_FEATURE_LIST, MOCK_ANALYSIS_ITEM_ARR)).toEqual(
      EXPECTED_CHART_DATA_ARR
    );
  });

  it("Should return empty data when analysis item is empty", () => {
    expect(makeChartData(MOCK_FEATURE_LIST, [])).toEqual([]);
  });

  it("Should return empty data when feature item is empty", () => {
    expect(makeChartData([], MOCK_ANALYSIS_ITEM_ARR)).toEqual([]);
  });

  it("Should return empty data", () => {
    expect(makeChartData([], [])).toEqual([]);
  });
});

describe("Make percentage", () => {
  it("Should return the number with the percentage symbol", () => {
    const MOCK_CHART_DATA_ITEM = { value: 10 };
    const numbeWithPercentage = makePercentage(MOCK_CHART_DATA_ITEM);
    expect(numbeWithPercentage).toContain("10");
    expect(numbeWithPercentage).toContain("%");
  });
});
