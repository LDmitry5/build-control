import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

const manifest = {
  theme_color: "#8936FF",
  background_color: "#2EC6FE",
  icons: [
    { purpose: "maskable", sizes: "512x512", src: "icon512_maskable.png", type: "image/png" },
    { purpose: "any", sizes: "512x512", src: "icon512_rounded.png", type: "image/png" },
  ],
  screenshots: [
    {
      src: "screenshots/desktop.png",
      sizes: "1296x914",
      type: "image/png",
      form_factor: "wide",
    },
    {
      src: "screenshots/mobile.png",
      sizes: "397x841",
      type: "image/png",
      form_factor: "narrow",
    },
  ],
  orientation: "portrait",
  display: "standalone",
  dir: "auto",
  lang: "ru-RU",
  description: "Приложение для мониторинга строительных площадок",
  name: "PWA-BuildControl",
  short_name: "BC-PWA",
  start_url: "/",
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
      workbox: {
        globPatterns: ["**/*.{html,css,js,ico,png,svg}"],
      },
      manifest: manifest,
    }),
  ],
  base: "/build-control",
});
