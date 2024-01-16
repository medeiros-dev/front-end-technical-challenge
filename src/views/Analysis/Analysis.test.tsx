import Analysis from "./Analysis";

import { render, waitForElementToBeRemoved } from "@testing-library/react";
import { AnalysisTestIdEnum } from "./AnalysisTestIdeEnum";
import { MemoryRouter } from "react-router-dom";

jest.mock("../../services", () => ({
  getAnalysisData: jest.fn().mockReturnValue([]),
  getFeatureList: jest.fn().mockReturnValue([]),
}));

describe("Analysis screen", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Should render loading state", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Analysis />
      </MemoryRouter>
    );
    expect(getByTestId(AnalysisTestIdEnum.SCREEN_TITLE)).toBeInTheDocument();
    expect(getByTestId(AnalysisTestIdEnum.CHART_SKELETON)).toBeInTheDocument();
  });

  it("Should render an empty message when no data is provided.", async () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Analysis />
      </MemoryRouter>
    );

    await waitForElementToBeRemoved(
      getByTestId(AnalysisTestIdEnum.CHART_SKELETON),
      { timeout: 5000 }
    ).then(() => console.log("Finish loading"));
    expect(getByTestId(AnalysisTestIdEnum.EMPTY_MESSAGE)).toBeInTheDocument();
  });
});
