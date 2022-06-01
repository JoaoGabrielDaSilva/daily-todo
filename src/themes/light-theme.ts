import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  background: {
    primary: "#ffffff",
    secondary: "#ffffff",
    tertiary: "#fcfafe",
    unfilled: "#f2f2f6",
    contrast: "#8965f0",
  },
  text: {
    primary: "#ffffff",
    contrast: "#8965f0",
    secondary: "#7b7a92",
  },
  color: {
    blue: {
      200: "#7dc9fc",
      500: "#0096f7",
    },
    green: {
      500: "#67ca52",
    },
    orange: {
      500: "#ff8f00",
    },
    pink: {
      200: "#fa7496",
      500: "#ce085b",
    },
  },
  spacing: {
    sm: 5,
    md: 10,
    xl: 15,
    xxl: 20,
  },
  radii: {
    sm: 5,
    md: 10,
  },
};
