import React, { useState } from "react"
import styled from "styled-components"
import { BodyIntro, H1 } from "../../styles/TextStyles"
import Certifications from "./Certifications"
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

const TabWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;

  @media (max-width: 1024px) {
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-evenly;
    width: 100%;
  }
`

const Tab = styled.div`
  padding: 10px 0;
  cursor: pointer;
  position: relative;

  @media (max-width: 1024px) {
    padding: 0;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 3px;
    background-color: ${props => props.theme.primaryColor};
    transition: width 1s;
  }

  ${({ active }) =>
    active &&
    `
    &::after {
      width: 100%;
    }
  `}
`
