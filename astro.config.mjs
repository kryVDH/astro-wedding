import { defineConfig } from 'astro/config';
import netlify from "@astrojs/netlify/functions";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: netlify(),
  integrations: [tailwind(), react({
    include: ['**/react/*']
  }), icon({
    include: {
      mdi: ['*'],
      cil: ['*']
    }
  })]
});