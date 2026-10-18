import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'

// Production URL, used for the sitemap, RSS feed, and canonical/OG URLs.
// Switch to 'https://calebanoff.dev' once the domain is connected in Vercel
// (or set SITE_URL in Vercel's environment variables).
const SITE_URL = process.env.SITE_URL || 'https://my-portfolio-one-delta-83.vercel.app'

export default defineConfig({
  site: SITE_URL,
  integrations: [react(), mdx(), sitemap()],
})
