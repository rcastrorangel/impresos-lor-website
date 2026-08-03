import { test, expect } from "@playwright/test";

test.describe("Navegación principal", () => {
  test("la página de inicio carga correctamente", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { name: /Impresión y Offset/i })).toBeVisible();
  });

  test("el enlace 'Servicios' del menú navega a /servicios", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Servicios" }).first().click();
    await expect(page).toHaveURL(/\/servicios$/);
    await expect(page.getByRole("heading", { name: /Nuestros Servicios de Impresión/i })).toBeVisible();
  });

  test("el enlace 'Contacto' del menú navega a /contacto", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Contacto" }).first().click();
    await expect(page).toHaveURL(/\/contacto$/);
    await expect(page.getByRole("heading", { name: "Contacto" })).toBeVisible();
  });

  test("una ruta inexistente muestra la página 404", async ({ page }) => {
    await page.goto("/esta-ruta-no-existe");
    await expect(page.getByText("404")).toBeVisible();
  });
});
