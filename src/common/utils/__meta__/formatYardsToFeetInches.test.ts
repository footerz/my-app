import { formatYardsToFeetInches } from "../formatYardsToFeetInches";

describe("formatYardsToFeetInches", () => {
  it("should return a fallback when yards is undefined", () => {
    const value = formatYardsToFeetInches(undefined, "FAIRWAY");

    expect(value).toEqual("-");
  });

  it("should return formatted yards value when end surface doe not equal green", () => {
    const value = formatYardsToFeetInches(6.541257, "FAIRWAY");

    expect(value).toEqual("7yds");
  });

  it("should return feet and inches when end surface is green", () => {
    const value = formatYardsToFeetInches(6.541257, "GREEN");

    expect(value).toEqual(`19ft 7"`);
  });
});
