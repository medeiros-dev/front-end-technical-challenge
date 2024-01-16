import { render, screen } from "@testing-library/react";
import ResponsiveChart from "./ResponsiveChart";

const MOCK_KEYS_VALUES: KeysValues = [
  "sd_cm_variable_ranking",
  "td_cm_variable_ranking",
  "td_variable_ranking",
];

const MOCK_CHART_DATA: ChartDataItem[] = [
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

jest.mock("../../utils/dataConversion", () => ({
  makePercentage: jest.fn(),
}));

describe("Responsive chart", () => {
  beforeEach(() => {
    render(
      <div style={{ height: 500, width: 500 }}>
        <ResponsiveChart data={MOCK_CHART_DATA} keys={MOCK_KEYS_VALUES} />
      </div>
    );
  });
  it("Should render keys", () => {
    expect(screen.findByText("sd_cm_variable_ranking")).toBeDefined();
    expect(screen.findByText("td_cm_variable_ranking")).toBeDefined();
    expect(screen.findByText("td_variable_ranking")).toBeDefined();
  });

  it("Should render features", () => {
    expect(screen.findByText("SepalLengthCm")).toBeDefined();
    expect(screen.findByText("SepalWidthCm")).toBeDefined();
    expect(screen.findByText("PetalLengthCm")).toBeDefined();
    expect(screen.findByText("PetalWidthCm")).toBeDefined();
  });

  it("Should render labels", () => {
    expect(screen.findByText("20.94%")).toBeDefined();
    expect(screen.findByText("17.41%")).toBeDefined();
  });
});
