export default {
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
        green: "#1F8F5B",
        yellowish: "#F0FD71", // Custom yellowish color
        primarycolor: "#050505", // dark Black
        secondarycolor: "#666666", // Gray color
        whitelight: "#EEEEEE", //light white
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)", "sans-serif"],
      },
    },
  },
  corePlugins: {
    preflight: false, // Optional, only if you're removing base styles
  },
  plugins: [],
};
