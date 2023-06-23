import { createGlobalStyle } from "styled-components"
import { themes } from "./Themes"

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${themes.light.textColor};
    background-color: ${themes.light.backgroundColor};

    @media (prefers-color-scheme: dark) {
      color: ${themes.dark.textColor};
      background-color: ${themes.dark.backgroundColor};
    }
  }
`
