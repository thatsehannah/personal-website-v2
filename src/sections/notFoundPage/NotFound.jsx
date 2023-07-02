import React from "react"
import styled from "styled-components"
import { BodyMain, H1 } from "../../styles/TextStyles"
import { Link } from "gatsby"

const NotFound = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <Memoji src="/images/memojis/notfound.png" />
        <H1>404: Route Not Found</H1>
        <BodyMain>You tried to visit a route that doesn't exist...</BodyMain>
        <Link to="/">
          <BodyMain>{"<< Go home"}</BodyMain>
        </Link>
      </ContentWrapper>
    </Wrapper>
  )
}

export default NotFound

const Wrapper = styled.section`
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
`

const ContentWrapper = styled.div`
  width: 90%;
  height: auto;
  margin: 0 auto;
  justify-content: center;
  text-align: center;

  @media (max-width: 1024px) {
    width: 100%;
  }
`

const Memoji = styled.img`
  height: 450px;

  @media (max-width: 768px) {
    height: 350px;
  }
`
