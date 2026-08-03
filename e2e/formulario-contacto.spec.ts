import { test, expect } from "@playwright/test";

test.describe("Formulario de contacto", () => {
  test("al enviar el formulario se abre WhatsApp con los datos capturados", async ({ page }) => {
    // Se reemplaza window.open antes de que cargue la página, para capturar
    // la URL exacta con la que la app intenta abrir WhatsApp sin depender
    // de que wa.me sea alcanzable desde el entorno donde corren las pruebas.
    await page.addInitScript(() => {
      (window as unknown as { __openedUrls: string[] }).__openedUrls = [];
      window.open = (url) => {
        (window as unknown as { __openedUrls: string[] }).__openedUrls.push(String(url));
        return null;
      };
    });

    await page.goto("/contacto");

    await page.getByLabel("Nombre").fill("Cliente de Prueba");
    await page.getByLabel("Teléfono").fill("2211234567");
    await page.getByLabel("Mensaje").fill("Necesito una cotización de prueba");
    await page.getByRole("button", { name: "Enviar mensaje" }).click();

    const openedUrls = await page.evaluate(() => (window as unknown as { __openedUrls: string[] }).__openedUrls);
    expect(openedUrls).toHaveLength(1);

    const popupUrl = new URL(openedUrls[0]);
    expect(popupUrl.hostname).toBe("wa.me");
    expect(popupUrl.pathname).toBe("/522218594321");

    const mensaje = decodeURIComponent(popupUrl.searchParams.get("text") ?? "");
    expect(mensaje).toContain("Cliente de Prueba");
    expect(mensaje).toContain("2211234567");
    expect(mensaje).toContain("Necesito una cotización de prueba");
  });
});
