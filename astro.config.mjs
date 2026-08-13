import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import remarkDirective from 'remark-directive';
import { unified } from '@astrojs/markdown-remark';
import { gcodeLang } from './src/utils/gcode-lang.ts';
import remarkCallouts from './src/utils/remark-callouts.mjs';

export default defineConfig({
  site: 'https://milan6633.github.io',
  base: '/Cnc-Mastery',
  integrations: [sitemap()],
  markdown: {
    processor: unified({
      remarkPlugins: [remarkDirective, remarkCallouts],
    }),
    shikiConfig: {
      themes: {
        dark: 'github-dark-dimmed',
        light: 'github-light',
      },
      langs: [gcodeLang],
    },
  },
});
