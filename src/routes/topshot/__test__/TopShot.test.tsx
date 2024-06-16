import { fireEvent, render, screen } from "@testing-library/react";
import { TopShot } from "../TopShot";
import { shot, summaryStatistics } from "./TopShot.fixtures";
import { MemoryRouter } from "react-router-dom";

jest.mock("../components/Map/Map");

describe("TopShot", () => {
  test("renders map with shot, opens and closes shot details menu", async () => {
    render(
      <MemoryRouter>
        <TopShot shot={shot} summaryStatistics={summaryStatistics} />
      </MemoryRouter>
    );

    expect(screen.getByTestId("back-button")).toBeInTheDocument();

    expect(screen.getByText("Shot Quality")).toBeInTheDocument();
    expect(screen.getByTestId("shot-quality")).toBeInTheDocument();

    //check menu is closed
    expect(screen.getByText("Shot Details & Statistics")).toBeInTheDocument();
    expect(screen.getByTestId("shot-details-menu")).toHaveStyle({
      height: "2.375rem",
    });
    expect(screen.queryByText("9 Iron")).not.toBeInTheDocument();

    //open menu
    await fireEvent.click(screen.getAllByTestId("chevron")[1]);

    //check menu is open
    expect(screen.getByTestId("shot-details-menu")).toHaveStyle({
      height: "12.5rem",
    });
    expect(screen.getByText("9 Iron")).toBeInTheDocument();
    expect(
      screen.queryByText("Shot Details & Statistics")
    ).not.toBeInTheDocument();

    //check statistics tab is not open
    expect(screen.queryByText("Last 20 rounds")).not.toBeInTheDocument();

    await fireEvent.click(screen.getByText("Statistics"));

    //check statistics tab is chosen
    expect(screen.getByText("Last 20 rounds")).toBeInTheDocument();
    expect(screen.getByText("GIR")).toBeInTheDocument();
    expect(screen.getByText("21%")).toBeInTheDocument();
  });
});
