<<<<<<< HEAD
import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'
import image from '@astrojs/image'
import mdx from '@astrojs/mdx'
import alpinejs from '@astrojs/alpinejs'
import robotsTxt from 'astro-robots-txt'

import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import remarkPlantUML from '@akebifiky/remark-simple-plantuml'
import { remarkReadingTime } from './remark-plugins/remark-reading-time.mjs'
import { remarkDiagram } from './remark-plugins/remark-diagram.mjs'
=======
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import alpinejs from '@astrojs/alpinejs';
import robotsTxt from 'astro-robots-txt';
import remarkMath from 'remark-math';
import remarkEmoji from 'remark-emoji';
import rehypeKatex from 'rehype-katex';
import remarkPlantUML from '@akebifiky/remark-simple-plantuml';
import { remarkReadingTime } from './remark-plugins/remark-reading-time.mjs';
import { remarkDiagram } from './remark-plugins/remark-diagram.mjs';
>>>>>>> 102a1f047e7c8208451aedb1c667fe209c1189a0

import markdoc from "@astrojs/markdoc";

// https://astro.build/config
export default defineConfig({
  vite: {
    ssr: {
      external: ['svgo'],
      noExternal: ['swiper', 'leaflet']
    }
  },
  site: 'https://darahem.ly',
  base: '/hello-astro',
<<<<<<< HEAD
  integrations: [
    tailwind(),
    sitemap(),
    image(),
    mdx(),
    alpinejs(),
    robotsTxt(),
  ],
=======
  integrations: [tailwind(), sitemap(), mdx(), alpinejs(), robotsTxt(), markdoc()],
>>>>>>> 102a1f047e7c8208451aedb1c667fe209c1189a0
  experimental: {
    assets: true
  },
  markdown: {
    extendDefaultPlugins: true,
    remarkPlugins: [remarkReadingTime, remarkMath, remarkPlantUML, remarkDiagram, remarkEmoji],
    rehypePlugins: [rehypeKatex],
    shikiConfig: {
      theme: 'github-light',
      langs: [],
      // Enable word wrap to prevent horizontal scrolling
      wrap: true
    }
  }
});