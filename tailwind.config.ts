import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      "heading1-bold": [
        "50px",
        {
          lineHeight: "100%",
          fontWeight: "700",
        },
      ],
      "heading2-bold": [
        "30px",
        {
          lineHeight: "100%",
          fontWeight: "700",
        },
      ],
      "heading3-bold": [
        "24px",
        {
          lineHeight: "100%",
          fontWeight: "700",
        },
      ],
      "heading4-bold": [
        "20px",
        {
          lineHeight: "100%",
          fontWeight: "700",
        },
      ],
      "body-bold": [
        "18px",
        {
          lineHeight: "100%",
          fontWeight: "700",
        },
      ],
      "body-semibold": [
        "18px",
        {
          lineHeight: "100%",
          fontWeight: "600",
        },
      ],
      "body-medium": [
        "18px",
        {
          lineHeight: "100%",
          fontWeight: "500",
        },
      ],
      "base-bold": [
        "16px",
        {
          lineHeight: "100%",
          fontWeight: "600",
        },
      ],
      "base-medium": [
        "16px",
        {
          lineHeight: "100%",
          fontWeight: "500",
        },
      ],
      "small-bold": [
        "14px",
        {
          lineHeight: "140%",
          fontWeight: "700",
        },
      ],
      "small-medium": [
        "14px",
        {
          lineHeight: "140%",
          fontWeight: "500",
        },
      ],
    },
    extend: {
      fontFamily: {
        'primary': ['Poppins']
      },
      colors: {
        "red-1": "#FF0000",
        "grey-1": "#F7F7F7",
        "grey-2": "#8A8A8A",
        'first-color': '#DC3845',
        'first-color-alt': '#D42B39',
        'title-color': '#282525',
        'text-color': '#5D5656',
        // 'body-color': '#FFFFFF',
        'body-color': '#f9f2e7',
        'container-color': '#FFFFFF',
        'first-color-dark': '#DB4D59',
        'title-color-dark': '#F3F2F2',
        'text-color-dark': '#C2BDBD',
        'text-color-light': '#918889',
        // 'body-color-dark': '#251819',
        'body-color-dark': '#251401',
        'container-color-dark': '#2F2223',
      },
      screens: {
        xs: '475px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1300px',
      }
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
export default config;

