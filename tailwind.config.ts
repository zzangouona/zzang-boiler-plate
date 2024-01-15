import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['*'],
  theme: {
    extend: {
      colors: {
        electric: '#db00ff',
        ribbon: '#0047ff',
      },
    },
  },
  plugins: [],
};
export default config;
