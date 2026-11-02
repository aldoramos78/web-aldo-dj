process.env.ASTRO_TELEMETRY_DISABLED = '1';

import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.aldodeejay.com',
  integrations: [tailwind({
    applyBaseStyles: false,
  })],
  compressHTML: true,
});
