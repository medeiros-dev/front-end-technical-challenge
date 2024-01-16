import { render, screen } from "@testing-library/react";
import { NavBarTestIdEnum } from "./NavBarTestIdEnum";
import { MemoryRouter } from "react-router-dom";
import Navbar from "./Navbar";

describe("Nav bar", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
  });

  it("Should render", () => {
    expect(screen.getByTestId(NavBarTestIdEnum.NAV_BAR)).toBeInTheDocument();
  });
});
