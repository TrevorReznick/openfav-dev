import { defineConfig, passthroughImageService } from 'astro/config'
import tailwind from "@astrojs/tailwind"
import vercel from '@astrojs/vercel/serverless'

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  image: {
    service: passthroughImageService()
  },
  integrations: [     
    tailwind()
  ]
})