import { StatusBar } from "expo-status-bar";
import React, { useMemo } from "react";
import { View } from "react-native";
import { ThemeProvider } from "styled-components";
import { Todos } from "./src/screens/Todos/Todos";
import { darkTheme, lightTheme } from "./src/themes";

export default function App() {
  const theme = useMemo(() => darkTheme, []);

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" />
      <Todos />
    </ThemeProvider>
  );
}
