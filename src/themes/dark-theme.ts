import { DefaultTheme } from "styled-components";

export const darkTheme: DefaultTheme = {
  background: {
    primary: "#1c1727",
    secondary: "#262235",
    tertiary: "#201d2b",
    unfilled: "#2a2536",
    contrast: "#8965f0",
  },
  text: {
    primary: "#ffffff",
    secondary: "#7b7a92",
    contrast: "#8965f0",
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
