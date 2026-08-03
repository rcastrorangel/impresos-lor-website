import { defineConfig, devices } from "@playwright/test";

/**
 * Configuración de Playwright para las pruebas end-to-end (e2e).
 * Estas pruebas verifican que el sitio realmente funciona en un navegador
 * real: que las páginas cargan, la navegación funciona, y los botones de
 * WhatsApp y el formulario de contacto hacen lo que deben hacer — algo que
 * el build y el lint por sí solos no pueden garantizar.
 */
export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: "list",
  use: {
    baseURL: "http://127.0.0.1:4173",
    trace: "retain-on-failure",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
  webServer: {
    command: "npm run preview -- --port 4173 --host 127.0.0.1",
    url: "http://127.0.0.1:4173",
    reuseExistingServer: !process.env.CI,
    timeout: 60_000,
  },
});
