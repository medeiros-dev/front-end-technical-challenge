import { render } from "@testing-library/react";
import { ModelListTestIdEnum } from "./ModelListTestIdEnum";
import ModelList from "./ModelList";
import { MemoryRouter } from "react-router-dom";
import { ListItemTestIdEnum } from "../ListItem/ListItemTestIdEnum";

const MODEL_LIST_MOCK: ModelListItem[] = [
  {
    id: "126897e6-9f59-ab67",
    name: "Cortana",
    type: "Regression",
  },
];

describe("Model List", () => {
  it("Should render model list and model list item", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <ModelList data={MODEL_LIST_MOCK} />
      </MemoryRouter>
    );
    const modelList = getByTestId(ModelListTestIdEnum.MODEL_LIST);
    const modelListItem = getByTestId(ListItemTestIdEnum.LIST_ITEM);
    expect(modelList).toBeInTheDocument();
    expect(modelListItem).toBeInTheDocument();
  });

  it("Should render empty message", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <ModelList data={[]} />
      </MemoryRouter>
    );
    const modelListEmpty = getByTestId(ModelListTestIdEnum.MODEL_LIST_EMPTY);
    expect(modelListEmpty).toBeInTheDocument();
  });
});
