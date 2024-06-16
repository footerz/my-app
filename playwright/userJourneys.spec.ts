import { test, expect } from "@playwright/test";

test.describe("Top Shots Widget", () => {
  test("displays home page and navigates to top shot", async ({ page }) => {
    await page.goto("/player/dcab3e25bcf943dbbb60fe840261a810");

    //check player info has loaded
    const player = await page.getByText("Dan Footman");
    await expect(player).toBeVisible();

    //check shot information has loaded
    await page.getByText("9 iron").click();

    //check we can navigate to shot information
    const backButton = await page.getByText("Back");
    await expect(backButton).toBeVisible();
    const shotQuality = await page.getByText("96");
    await expect(shotQuality).toBeVisible();
  });

  test("allows deep linking to a specific shot", async ({ page }) => {
    await page.goto("player/dcab3e25bcf943dbbb60fe840261a810/hole/13/shot/1");

    // check shot information has loaded
    const backButton = await page.getByText("Back");
    await expect(backButton).toBeVisible();
    const shotQuality = await page.getByText("96");
    await expect(shotQuality).toBeVisible();
  });

  test("displays an error page when trying to navigate to an incorrect route", async ({
    page,
  }) => {
    await page.goto("/123");

    const oopsMessage = await page.getByText("Oops!");
    await expect(oopsMessage).toBeVisible();
  });
});
