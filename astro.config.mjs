import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'

// TODO: replace with your real production URL once deployed.
// This is used for the sitemap, RSS feed, and canonical/OG URLs.
export default defineConfig({
  site: 'https://my-portfolio.vercel.app',
  integrations: [react(), mdx(), sitemap()],
})
