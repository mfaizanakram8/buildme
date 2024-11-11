import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-yellow': '0 0 10px rgba(235, 174, 21, 0.8)', // Spread and color adjusted
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'custom-yellow': '#EBAE15',
      },
    },
  },
  plugins: [],
} satisfies Config;
