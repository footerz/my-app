import { render, screen, within } from "@testing-library/react";
import { Root } from "../Root";
import { topShots } from "./Root.fixtures";
import { MemoryRouter } from "react-router-dom";

describe("Root", () => {
  test("renders player details", () => {
    render(
      <MemoryRouter>
        <Root topShots={undefined} />
      </MemoryRouter>
    );

    expect(screen.getByTestId("player-avatar")).toBeInTheDocument();
    expect(screen.getByText("Dan Footman")).toBeInTheDocument();
    expect(screen.getByText("13 Handicap")).toBeInTheDocument();
    expect(screen.getByText("Surrey")).toBeInTheDocument();
  });

  test("renders three tops shots and their details", () => {
    render(
      <MemoryRouter>
        <Root topShots={topShots} />
      </MemoryRouter>
    );

    const topShotButtons = screen.getAllByTestId("top-shot-button");

    expect(topShotButtons).toHaveLength(3);

    expect(
      within(topShotButtons[0]).getByText("West Byfleet GC")
    ).toBeInTheDocument();
    expect(within(topShotButtons[0]).getByText("Hole 1")).toBeInTheDocument();
    expect(within(topShotButtons[0]).getByText("Putter")).toBeInTheDocument();

    expect(
      within(topShotButtons[0]).getByText("Shot Quality")
    ).toBeInTheDocument();
    expect(
      within(topShotButtons[0]).getByTestId("quality-bar")
    ).toBeInTheDocument();
    expect(within(topShotButtons[0]).getByTestId("quality-bar")).toHaveStyle({
      "--percentage": "137.63185",
    });

    expect(
      within(topShotButtons[0]).getByTestId("chevron")
    ).toBeInTheDocument();
  });
});
