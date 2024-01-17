import { defineConfig } from 'astro/config';

import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
	    title: 'Quantum Phase-field Open-source Package (Q-POP)',
        tableOfContents: { minHeadingLevel: 1, maxHeadingLevel: 5 },
    }),
  ],
});
