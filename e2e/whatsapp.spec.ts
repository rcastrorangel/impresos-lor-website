import { test, expect } from "@playwright/test";

const WHATSAPP_NUMBER = "522218594321";

test.describe("Botones de WhatsApp", () => {
  test("el botón flotante de WhatsApp enlaza al número correcto", async ({ page }) => {
    await page.goto("/");
    const boton = page.getByRole("link", { name: "Contáctanos por WhatsApp" });
    await expect(boton).toHaveAttribute("href", `https://wa.me/${WHATSAPP_NUMBER}`);
  });

  test("el botón 'Cotizar por WhatsApp' del menú enlaza al número correcto", async ({ page }) => {
    await page.goto("/");
    const boton = page.getByRole("link", { name: /Cotizar por WhatsApp/i }).first();
    await expect(boton).toHaveAttribute("href", `https://wa.me/${WHATSAPP_NUMBER}`);
  });

  test("el botón de WhatsApp en Servicios enlaza al número correcto", async ({ page }) => {
    await page.goto("/servicios");
    const boton = page.getByRole("link", { name: /Escríbenos por WhatsApp/i });
    await expect(boton).toHaveAttribute("href", `https://wa.me/${WHATSAPP_NUMBER}`);
  });
});
