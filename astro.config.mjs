import react from '@astrojs/react';
import wyw from '@wyw-in-js/vite';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  base: 'pokemons-test',
  integrations: [react()],
  fonts: [
    {
      name: 'Raleway',
      provider: fontProviders.google(),
      cssVariable: '--font-raleway',
    },
  ],
  vite: {
    plugins: [
      wyw({
        include: ['**/*.{ts,tsx,js,jsx}'],
        babelOptions: {
          presets: ['@babel/preset-typescript', '@babel/preset-react'],
        },
      }),
    ],
  },
  image: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
      },
    ],
  },
});
