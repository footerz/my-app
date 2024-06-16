import { formatPercentageValue } from "../formatPercentageValue";

describe("formatPercentageValue", () => {
  test("return fallback when stat is undefined", () => {
    const value = formatPercentageValue(undefined);

    expect(value).toEqual("-");
  });

  test("return formatted percentage when stat is provided", () => {
    const value = formatPercentageValue(0.1);

    expect(value).toEqual("10%");
  });
});
