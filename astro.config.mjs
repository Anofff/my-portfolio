import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'

// Production URL, used for the sitemap, RSS feed, and canonical/OG URLs.
// Must match the domain Vercel serves as primary (calebanoff.com redirects to www).
// SITE_URL in Vercel's environment variables overrides it.
const SITE_URL = process.env.SITE_URL || 'https://www.calebanoff.com'

export default defineConfig({
  site: SITE_URL,
  integrations: [react(), mdx(), sitemap()],
})
