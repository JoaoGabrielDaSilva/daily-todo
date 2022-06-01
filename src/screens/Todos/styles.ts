import { StyleSheet } from "react-native";
import { DefaultTheme } from "styled-components";

export const baseStyles = (theme: DefaultTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background.primary,
    },
  });
