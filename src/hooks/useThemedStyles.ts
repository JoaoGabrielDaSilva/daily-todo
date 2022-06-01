import { useTheme } from "styled-components";

export const useThemedStyles = (styles) => {
  const theme = useTheme();

  return styles(theme);
};
