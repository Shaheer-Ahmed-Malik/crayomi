import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',

          
        // Primary gradient
        'primary-gradient': 'linear-gradient(90deg, #2563eb 0%, #f59e42 100%)',
        // secondary gradient
        'secondary-gradient': 'linear-gradient(90deg, #7ecb1d 0%, #009bba 100%)',
        // primary color
        'primary-color': '#009bbb',
        // secondary color
        'secondary-color': '#80cc1f',
      },
    },
  },
  plugins: [],
}
export default config
