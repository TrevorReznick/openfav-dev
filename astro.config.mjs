import path from 'path'
import { fileURLToPath } from 'url'

import { defineConfig, passthroughImageService } from 'astro/config'
import tailwind from "@astrojs/tailwind"
import vercel from '@astrojs/vercel/serverless'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  image: {
    service: passthroughImageService()
  },
  integrations: [     
    tailwind()
  ],
  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  },
})