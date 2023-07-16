import React from "react"
import styled from "styled-components"
import { H1, BodyIntro } from "../../../styles/TextStyles"
import Letter from "../../../components/special/Letter"
import { useAboutMeData } from "../../../utils/hooks/useAboutMeData"
import { fadeInAnimation } from "../../../styles/FadeInAnimation"

const AboutHero = () => {
  const text = useAboutMeData().find(
    edge => edge.node.for === "aboutHeroSection"
  ).node.text

  return (
    <Wrapper>
      <ContentWrapper>
        <LeftSide>
          <Memoji src="/images/memojis/about-me.png" alt="hand sign memoji" />
        </LeftSide>
        <RightSide>
          <TextWrapper>
            <H1>
              The name's Elliot, but you can call me <Letter />
            </H1>
            <BodyIntro>{text && text}</BodyIntro>
          </TextWrapper>
        </RightSide>
      </ContentWrapper>
    </Wrapper>
  )
}

export default AboutHero

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 20px 160px;

  @media (max-width: 1024px) {
    padding: 0px 20px 160px;
  }
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-evenly;
  width: 90%;
  margin: 0 auto;
  overflow: hidden;

  @media (max-width: 1024px) {
    width: 100%;
    grid-template-columns: auto;
  }
`

const LeftSide = styled.div`
  display: grid;
  ${fadeInAnimation}
  justify-content: center;

  @media (max-width: 1024px) {
    justify-content: center;
    width: 100%;
  }
`

const RightSide = styled.div`
  display: flex;
  width: 550px;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    width: 100%;
  }
`

const Memoji = styled.img`
  height: 450px;
  position: relative;
  top: -55px;

  @media (max-width: 768px) {
    height: 350px;
    top: -60px;
  }
`

const TextWrapper = styled.div`
  display: grid;
  gap: 20px;
`
