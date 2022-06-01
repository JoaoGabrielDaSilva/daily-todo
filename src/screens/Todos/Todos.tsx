import React from "react";
import { View } from "react-native";
import { useTheme } from "styled-components";
import { useThemedStyles } from "../../hooks/useThemedStyles";
import { baseStyles } from "./styles";

export const Todos = () => {
  const styles = useThemedStyles(baseStyles);

  return <View style={styles.container}></View>;
};
