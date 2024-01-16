import Inventory from "./Inventory";

import { render, waitForElementToBeRemoved } from "@testing-library/react";
import { InventoryTestIdEnum } from "./InventoryTestIdEnum";
import { MemoryRouter } from "react-router-dom";
import { ModelListTestIdEnum } from "../../components/ModelList/ModelListTestIdEnum";

jest.mock("../../services", () => ({
  getModels: jest.fn().mockReturnValue([]),
}));

describe("Analysis screen", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Should render loading state", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Inventory />
      </MemoryRouter>
    );
    expect(getByTestId(InventoryTestIdEnum.HEADER)).toBeInTheDocument();
  });

  it("Should render an empty message when no data is provided.", async () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Inventory />
      </MemoryRouter>
    );

    await waitForElementToBeRemoved(
      getByTestId(InventoryTestIdEnum.LOADING_CONTAINER),
      { timeout: 5000 }
    ).then(() => console.log("Finish loading"));
    expect(
      getByTestId(ModelListTestIdEnum.MODEL_LIST_EMPTY)
    ).toBeInTheDocument();
  });
});
