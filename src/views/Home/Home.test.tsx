import { render, screen } from "@testing-library/react";
import Home from "./Home";
import { HomeTestIdEnum } from "./HomeTestIdEnum";
import { MemoryRouter } from "react-router-dom";

describe("Home screen", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
  });
  it("Should render", () => {
    expect(screen.getByTestId(HomeTestIdEnum.HOME_SCREEN)).toBeInTheDocument();
  });
  it("Should have a link the analysis page", () => {
    expect(screen.getByTestId(HomeTestIdEnum.INVENTORY_LINK)).toHaveAttribute(
      "href",
      `/inventory`
    );
  });
});
