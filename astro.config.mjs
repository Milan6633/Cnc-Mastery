import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import remarkDirective from 'remark-directive';
import { unified } from '@astrojs/markdown-remark';
import { gcodeLang } from './src/utils/gcode-lang.ts';
import remarkCallouts from './src/utils/remark-callouts.mjs';

export default defineConfig({
  site: 'https://milan6633.github.io',
  // Overridable so PR-preview builds (served from a subpath under
  // /Cnc-Mastery/pr-preview/pr-<n>/) generate correct internal links.
  // Unset in normal builds -- defaults to the live site's base exactly
  // as before.
  base: process.env.ASTRO_BASE || '/Cnc-Mastery',
  integrations: [sitemap()],
  markdown: {
    processor: unified({
      remarkPlugins: [remarkDirective, remarkCallouts],
    }),
    shikiConfig: {
      themes: {
        dark: 'github-dark-dimmed',
        // Standard github-light drops below 4.5:1 on our warm code panel.
        light: 'github-light-high-contrast',
      },
      // Emit CSS variables only. Without this Shiki inlines the light theme's
      // colours, which paints code blocks white on the dark page. Theme
      // switching is handled in typography.css.
      defaultColor: false,
      langs: [gcodeLang],
    },
  },
});
