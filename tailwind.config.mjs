/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    letterSpacing: {
      widest: ".125em",
      "josa-title": ".4em",
    },
    fontFamily: {
      josa: [
        "Montserrat",
        "Avenir",
        "Corbel",
        "URW Gothic",
        "source-sans-pro",
        "sans-serif",
      ],
    },
    colors: {
      "josa-dark": "#353a3c",
      "josa-dark-brown": "#383F30",
      "josa-green": "#5e6e50",
      "josa-dark-green": "#454F44",
      "josa-light-green": "#B4B39C",
      "josa-mid-brown": "#a07c58",
      "josa-light-brown": "#b5946f",
      "josa-cream": "#dfd5c2",
      "josa-light": "#f4ffff",
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
        160: "40rem",
        256: "64rem",
      },
    },
  },
  plugins: [],
};
