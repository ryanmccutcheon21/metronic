/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#006CEA',
        'green': '#50CD89',
        "gray-gray-600": "#7e8299",
        "primary-primary": "#3e97ff",
        "white-dark-white": "#fff",
        "gray-gray-200": "#f1f1f2",
        whitesmoke: "#f5f7fa",
        crimson: "rgba(241, 65, 108, 0.1)",
        "danger-danger-active": "#d9214e",
        "white-dark-dark": "#181c32",
        "danger-danger": "#f1416c",
        "gray-gray-700": "#5e6278",
        "warning-warning": "#f7c000",
        gold: "rgba(247, 192, 0, 0.1)",
        "info-info": "#7239ea",
        "info-info-light": "#f8f5ff",
        darkslategray: "#3f4254",
        "gray-gray-300": "#e1e3ea",
        "primary-primary-light": "#eef6ff",
        "success-success-light": "#e8fff3",
        "success-success": "#50cd89",
        "danger-danger-light": "#fff5f8",
        "gray-gray-100": "#f9f9f9",
        "gray-gray-500": "#a1a5b7",
      },
      fontFamily: {
        "body-b-18-18-600": "Inter",
      },
      borderRadius: {
        "6xs": "7px",
        "81xl": "100px",
        "31xl": "50px",
      },
    },
    fontSize: {
      lg: "18px",
      xs: "12px",
      "3xs": "10px",
      sm: "14px",
      smi: "13px",
      base: "16px",
      "15xl": "34px",
      mini: "15px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
