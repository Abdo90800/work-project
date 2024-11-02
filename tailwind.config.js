/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customGray: "#757575",
        customheader: " #545F71",
        formColor: " #252525",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(0deg, #3EABCC, #3EABCC), linear-gradient(270.05deg, #5AE4CB -66.81%, #3EABCC 99.96%)",
      },
    },
  },
  plugins: [],
};
