module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: {
          900: "#000000",
          "900_3f": "#0000003f",
          "900_4c": "#0000004c",
          "900_99": "#00000099",
          "900_60": "#00000060",
          "900_a5": "#000000a5",
          "900_75": "#00000075",
        },
        amber: {
          100: "#fff2af",
          400: "#ffcd29",
          500: "#fbb80b",
          A100: "#ffec8a",
        },
        green: { 500: "#3cb841", A700: "#14ae5c", "500_01": "#3bb740" },
        gray: {
          100: "#f6f6f6",
          200: "#ebebeb",
          300: "#e6e6e6",
          400: "#b3b3b3",
          500: "#999999",
          600: "#757575",
          700: "#666666",
          800: "#505050",
          900: "#1e1e1e",
          "200_01": "#e7e7e7",
          "200_02": "#ededed",
          "400_05": "#c0c0c0",
          "400_01": "#bbb4bf",
          "400_02": "#c1c1c1",
          "100_01": "#f5f5f5",
          "400_03": "#b9b9b9",
          "400_04": "#c0bfbf",
          "600_02": "#7e7d7d",
          "600_01": "#848484",
          "900_01": "#181818",
          "600_7f": "#7575757f",
        },
        blue_gray: {
          50: "#eff1f4",
          100: "#d9d9d9",
          400: "#8c8c8c",
          900: "#333333",
          "100_cc": "#cccccccc",
          "400_01": "#8e8e8e",
          "100_01": "#cccccc",
          "100_02": "#d1d1d1",
          "50_01": "#f1f1f1",
          "50_02": "#f1f1f2",
        },
        red: { A700: "#ff0000", A700_01: "#fb0000" },
        deep_orange: { 100: "#ffc7c2", 600: "#f24822" },
        yellow: { 100: "#fff4ce", 200: "#ffe8a3" },
        white: { A700_0f: "#fffdfd0f", A700: "#ffffff", A700_44: "#ffffff44" },
        orange: { 50: "#fff8d3", 400: "#ffa629", "50_01": "#fff7e1" },
        indigo: { A700: "#0500ff" },
      },
      fontFamily: { inter: "Inter" },
      boxShadow: { bs: "0px 4px  4px 0px #0000003f" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
