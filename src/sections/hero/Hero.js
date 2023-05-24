import React from "react"
import styled from "styled-components"
import { H1, MediumText } from "../../styles/TextStyles"
import MainButton from "../../components/buttons/MainButton"
import WordAnimation from "../../components/animations/WordAnimation"

const Hero = props => {
  return (
    <Wrapper>
      <Background />
      <ContentWrapper>
        <TextWrapper>
          <Title>Elliot C. Hannah</Title>
          <Description>Full Stack Developer</Description>
          <MainButton title="Download my resume" />
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default Hero

const Wrapper = styled.div`
  position: relative;
`

const Background = styled.img`
  position: absolute;
  width: 100%;
  height: 850px;
  background: url("/images/backgrounds/hero-background.jpg");
  background-size: cover;
  transform: scaleX(-1);
  z-index: -1;
`

const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding: 200px 30px;
  display: grid;
  grid-template-columns: 500px auto;

  @media (max-width: 450px) {
    grid-template-columns: auto;
    gap: 60px;
    padding: 150px 20;
  }
`

const TextWrapper = styled.div`
  max-width: 500px;
  display: grid;
  gap: 30px;
`

const Title = styled(H1)``

const Description = styled(MediumText)``

const MemojiWrapper = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
`

const Memoji = styled.img`
  height: 500px;
  width: 500px;
`
