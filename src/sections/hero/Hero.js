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
        <LeftWrapper id="leftwrapper">
          <TextWrapper id="textwrapper">
            <MobileMemojiWrapper>
              <Memoji src="/images/memojis/hero-memoji.png" />
            </MobileMemojiWrapper>
            <Title>Hey, I'm Elliot 👋🏾</Title>
            <AnimatedRoles />
            <ButtonWrapper>
              <MainButton title="Download my resume" icon={<UilArrowDown />} />
            </ButtonWrapper>
          </TextWrapper>
        </LeftWrapper>
        <Underline />
        <RightWrapper id="rightwrapper">
          <MemojiWrapper id="memojiwrapper">
            <Memoji src="/images/memojis/hero-memoji.png" />
          </MemojiWrapper>
        </RightWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default Hero

const Wrapper = styled.div`
  position: relative;
`

const ContentWrapper = styled.div`
  width: 1300px;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  gap: 20px;
  padding: 180px 20px;

  @media (max-width: 450px) {
    width: 100%;
    flex-direction: column;
    /* text-align: center; */
    gap: 5px;
    padding: 100px 20px;
  }
`

const LeftWrapper = styled.div`
  display: flex;
`

const RightWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
`

const Underline = styled.hr`
  display: none;

  @media (max-width: 450px) {
    display: block;
    border: 1px solid #80d0c7;
  }
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
`

const Title = styled(H2)``

const ButtonWrapper = styled.div`
  display: flex;
  justify-items: left;

  @media (max-width: 450px) {
    justify-content: center;
  }
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
  display: flex;
  opacity: 0;
  animation: ${animation} 1s forwards;

  @media (max-width: 450px) {
    display: none;
  }
`

const MobileMemojiWrapper = styled.div`
  display: none;
  opacity: 0;
  animation: ${animation} 1s forwards;

  @media (max-width: 450px) {
    display: grid;
    justify-items: center;
  }
`

const Memoji = styled.img`
  height: 100%;
  width: 100%;

  @media (max-width: 768px) {
    height: 50%;
    width: 50%;
  }

  @media (max-width: 450px) {
    height: 265px;
    width: 265px;
  }
`
