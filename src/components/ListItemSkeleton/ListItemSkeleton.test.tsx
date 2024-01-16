import { render, screen } from "@testing-library/react";
import { ListItemSkeletonTestIdEnum } from "./ListItemSkeletonTestIdEnum";
import ListItemSkeleton from "./ListItemSkeleton";

describe("List item skeleton", () => {
  beforeEach(() => {
    render(<ListItemSkeleton />);
  });

  it("Should render", () => {
    expect(
      screen.getByTestId(ListItemSkeletonTestIdEnum.LIST_ITEM_SKELETON)
    ).toBeInTheDocument();
  });
});
