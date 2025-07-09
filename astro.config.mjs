// @ts-check
import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";
import mdx from "@astrojs/mdx";

// Define an authorized remote domain for optimization
const authorizedRemoteDomain = "images.unsplash.com";

// https://astro.build/config
export default defineConfig({
  // Configure for GitHub Pages deployment
  site: 'https://jasperyzh.github.io',
  base: '/proto-astroimage/',
  
  integrations: [react(), svelte(), mdx()],
  image: {
    // Specify domains from which remote images can be optimized
    domains: [authorizedRemoteDomain],
    // Alternatively, you can use remotePatterns for more flexible matching
    // remotePatterns: [{ protocol: "https", hostname: "**.unsplash.com" }],
  }
});
