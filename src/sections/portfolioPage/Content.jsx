import React from "react"
import styled from "styled-components"
import { H1 } from "../../styles/TextStyles"
import Projects from "./Projects"

const Content = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <TitleWrapper>
          <H1>Portfolio</H1>
        </TitleWrapper>
        <Projects />
      </ContentWrapper>
    </Wrapper>
  )
}

export default Content

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 20px;
`

const ContentWrapper = styled.div`
  display: grid;
  gap: 40px;
  width: 90%;

  @media (max-width: 1024px) {
    width: 100%;
  }
`

const TitleWrapper = styled.div`
  display: grid;
  justify-content: center;
`
