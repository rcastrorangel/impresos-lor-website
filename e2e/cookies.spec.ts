import { test, expect } from "@playwright/test";

test.describe("Aviso de cookies", () => {
  test("se muestra en la primera visita y desaparece al aceptar", async ({ page }) => {
    await page.goto("/");

    const aviso = page.getByText("Usamos cookies para analizar el tráfico");
    await expect(aviso).toBeVisible();

    await page.getByRole("button", { name: "Aceptar" }).click();
    await expect(aviso).not.toBeVisible();

    const consentimiento = await page.evaluate(() => localStorage.getItem("cookie_consent"));
    expect(consentimiento).toBe("granted");
  });

  test("no se muestra en visitas siguientes si ya se aceptó", async ({ page }) => {
    await page.goto("/");
    await page.evaluate(() => localStorage.setItem("cookie_consent", "granted"));
    await page.reload();

    await expect(page.getByText("Usamos cookies para analizar el tráfico")).not.toBeVisible();
  });
});
