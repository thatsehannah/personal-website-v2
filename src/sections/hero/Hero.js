import React from "react"
import styled, { keyframes } from "styled-components"
import { H2 } from "../../styles/TextStyles"
import MainButton from "../../components/buttons/MainButton"
import AnimatedRoles from "../../components/animations/AnimatedRoles"
import { UilArrowDown } from "@iconscout/react-unicons"

const Hero = props => {
  return (
    <Wrapper id="bigwrapper">
      <ContentWrapper id="contentwrapper">
        <IntroWrapper id="introwrapper">
          <LeftWrapper id="leftwrapper">
            <TextWrapper id="textwrapper">
              <Title>Hey, I'm Elliot 👋🏾</Title>
              <AnimatedRoles />
              <ButtonWrapper>
                <MainButton
                  title="Download my resume"
                  icon={<UilArrowDown />}
                />
              </ButtonWrapper>
            </TextWrapper>
          </LeftWrapper>
          <RightWrapper id="rightwrapper">
            <MemojiWrapper id="memojiwrapper">
              <Memoji src="/images/memojis/hero-memoji.png" />
            </MemojiWrapper>
          </RightWrapper>
        </IntroWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default Hero

const Wrapper = styled.div`
  position: relative;
  height: auto;
`

const ContentWrapper = styled.div`
  width: 1300px;
  margin: 0 auto;
  padding: 200px 20px;

  @media (max-width: 450px) {
    grid-template-columns: auto;
    gap: 60px;
    padding: 150px 20;
  }
`

const LeftWrapper = styled.div`
  display: grid;
  align-items: center;
`

const RightWrapper = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
`

const IntroWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  height: 450px;
`

const TextWrapper = styled.div`
  display: grid;
  gap: 40px;
`

const Title = styled(H2)``

const ButtonWrapper = styled.div`
  display: grid;
  justify-items: left;
`

const animation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
    filter: blur(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
    filter: blur(0px);
  }
`

const MemojiWrapper = styled.div`
  opacity: 0;
  animation: ${animation} 1s forwards;
`

const Memoji = styled.img`
  height: 100%;
  width: 100%;
  transition: 0.5s ease-in;

  :hover {
    transform: scale(0.5);
  }
`
