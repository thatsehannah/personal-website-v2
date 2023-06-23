import React, { useEffect, useState } from "react"
import styled, { ThemeProvider } from "styled-components"
import "./layout.css"
import Header from "./Header"
import Footer from "./Footer"
import { GlobalStyle } from "../../styles/GlobalStyles"
import { themes } from "../../styles/Themes"

const Layout = ({ children }) => {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
      if (mediaQuery.matches) {
        setTheme("dark")
      } else {
        setTheme("light")
      }

      const handler = () => setTheme(mediaQuery.matches ? "dark" : "light")

      mediaQuery.addEventListener("change", handler)
      return () => mediaQuery.removeEventListener("change", handler)
    }
  }, [])

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyle />
      <Body>
        <Header />
        <main>{children}</main>
        <Footer />
      </Body>
    </ThemeProvider>
  )
}

export default Layout

const Body = styled.div`
  main {
    padding: 30px 0px;

    @media (max-width: 768px) {
      padding: 0px;
    }
  }
`
