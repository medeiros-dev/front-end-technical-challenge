import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ListItemTestIdEnum } from "./ListItemTestIdEnum";
import { MemoryRouter } from "react-router-dom";
import ListItem from "./ListItem";

const MODEL_MOCK_REGRESSION: ModelListItem = {
  id: "126897e6-9f59-ab67",
  name: "Cortana",
  type: "Regression",
};

const MODEL_MOCK_CLASSIFICATION: ModelListItem = {
  id: "126897e6-9f59-ab68",
  name: "Copilot",
  type: "Classification",
};

describe("List item", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <ListItem model={MODEL_MOCK_REGRESSION} />
      </MemoryRouter>
    );
  });

  it("Should render", () => {
    expect(
      screen.getByTestId(ListItemTestIdEnum.LIST_ITEM)
    ).toBeInTheDocument();
  });

  it("Should render name", () => {
    expect(screen.getByText(MODEL_MOCK_REGRESSION.name)).toBeInTheDocument();
  });

  it("Should render type", () => {
    expect(screen.getByText(MODEL_MOCK_REGRESSION.type)).toBeInTheDocument();
  });

  it("Should have a link the analysis page", () => {
    expect(screen.getByTestId(ListItemTestIdEnum.LIST_ITEM)).toHaveAttribute(
      "href",
      `/analysis/${MODEL_MOCK_REGRESSION.name}`
    );
  });
});

describe("List item with regression type", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <ListItem model={MODEL_MOCK_REGRESSION} />
      </MemoryRouter>
    );
  });

  it("Should render Alert with success color", () => {
    expect(screen.getByTestId(ListItemTestIdEnum.LIST_ITEM_TYPE)).toHaveClass(
      "MuiAlert-colorSuccess"
    );
  });
});

describe("List item with classification type", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <ListItem model={MODEL_MOCK_CLASSIFICATION} />
      </MemoryRouter>
    );
  });

  it("Should render Alert with primary color", () => {
    expect(screen.getByTestId(ListItemTestIdEnum.LIST_ITEM_TYPE)).toHaveClass(
      "MuiAlert-colorPrimary"
    );
  });
});
