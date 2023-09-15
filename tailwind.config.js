/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-travelers": "linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%)",
      },
      colors: {
        "gray-scale-80": "#2E2E2E",
        "primary-70": "#B34B1E",
        "gray-scale-50":"#727272"
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        roboto: ["var(--font-roboto)"],
      },
    },
  },
  plugins: [],
};
