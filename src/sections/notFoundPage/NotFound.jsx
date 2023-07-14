import React from "react"
import styled from "styled-components"
import { BodyMain, H1 } from "../../styles/TextStyles"
import { Link } from "gatsby"

const NotFound = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <H1>404: Route Not Found</H1>
        <BodyMain>You tried to visit a route that doesn't exist.</BodyMain>
        <Link to="/">
          <BodyMain>{"<< Back to Home page"}</BodyMain>
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
  gap: 20px;
`

const ContentWrapper = styled.div`
  width: auto;
  display: grid;
  gap: 20px;
  height: auto;
  margin: 0 auto;
  overflow: hidden;
  justify-content: center;
  text-align: center;

  @media (max-width: 1024px) {
    width: 100%;
  }
`

//keeping just in case I want to use it later
// const Memoji = styled.img`
//   position: relative;
//   top: -30px;
//   height: auto;

//   @media (max-width: 768px) {
//     height: 350px;
//   }
// `
