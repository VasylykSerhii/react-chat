import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    dark: "#222831",
    gray: "#393e46",
    main: "#ffd369",
    light: "#eeeeee"
  },
  fonts: ["sans-serif", "Roboto"],
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;