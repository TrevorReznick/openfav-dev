import path from "path";
import { fileURLToPath } from "url";

import { defineConfig, passthroughImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import partytown from "@astrojs/partytown";

import type { AstroIntegration } from "astro";
import openfav from "./vendor/integrations";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const hasExternalScripts = false;
const whenExternalScripts = (
  items: (() => AstroIntegration) | (() => AstroIntegration)[] = []
) =>
  hasExternalScripts
    ? Array.isArray(items)
      ? items.map((item) => item())
      : [items()]
    : [];

export default defineConfig({
  output: "server",
  adapter: vercel(),
  image: {
    service: passthroughImageService(),
  },
  integrations: [
    tailwind(),
    openfav({
      config: "./src/config.yaml",
    }),
    ...whenExternalScripts(() =>
      partytown({
        config: { forward: ["dataLayer.push"] },
      })
    ),
  ],
  vite: {
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "./src"),
      },
    },
  },
});