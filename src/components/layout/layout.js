import React from "react"
import styled from "styled-components"
import "./layout.css"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <Body id="body">
      <Header />
      <main>{children}</main>
      <Footer />
    </Body>
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
