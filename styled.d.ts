import { ColorValue } from "react-native";
import { lightTheme } from "./src/themes";

declare module "styled-components" {
  export interface DefaultTheme {
    background: {
      primary: ColorValue;
      secondary: ColorValue;
      tertiary: ColorValue;
      unfilled: ColorValue;
      contrast: ColorValue;
    };
    text: {
      primary: ColorValue;
      contrast: ColorValue;
      secondary: ColorValue;
    };
    color: {
      blue: {
        200: ColorValue;
        500: ColorValue;
      };
      green: {
        500: ColorValue;
      };
      orange: {
        500: ColorValue;
      };
      pink: {
        200: ColorValue;
        500: ColorValue;
      };
    };
    spacing: {
      sm: number;
      md: number;
      xl: number;
      xxl: number;
    };
    radii: {
      sm: number;
      md: number;
    };
  }
}
