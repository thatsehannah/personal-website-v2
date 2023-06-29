import React from "react"
import styled from "styled-components"
import { H2 } from "../../../styles/TextStyles"
import MainButton from "../../../components/buttons/MainButton"
import AnimatedRoles from "../../../components/animations/AnimatedRoles"
import { UilArrowDown } from "@iconscout/react-unicons"
import Letter from "../../../components/special/Letter"
import { fadeInAnimation } from "../../../styles/FadeInAnimation"

const Hero = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <LeftWrapper>
          <TextWrapper>
            <Title>
              Hey, I'm <Letter />
              lliot 👋🏾
            </Title>
            <AnimatedRoles />
            <ButtonWrapper>
              <a
                href="https://drive.google.com/file/d/1DuWfX38E44ZJvLNhpw2ieaUW6o16_QNa/view"
                target="_blank"
                rel="noreferrer"
              >
                <MainButton text="Download my resume" icon={<UilArrowDown />} />
              </a>
            </ButtonWrapper>
          </TextWrapper>
        </LeftWrapper>
        <RightWrapper>
          <MemojiWrapper>
            <Memoji src="/images/memojis/hero-memoji.png" />
          </MemojiWrapper>
        </RightWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default Hero

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  padding: 40px 20px 160px;

  @media (max-width: 1024px) {
    padding: 0px 20px 160px;
  }
`

const ContentWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 20px;

  @media (max-width: 1024px) {
    width: 100%;
    flex-direction: column-reverse;
    gap: 5px;
  }
`

const LeftWrapper = styled.div`
  display: flex;
`

const RightWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;

  @media (max-width: 1024px) {
    justify-content: center;
  }
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
`

const Title = styled(H2)`
  font-weight: 600;
`

const ButtonWrapper = styled.div`
  display: flex;
`

const MemojiWrapper = styled.div`
  display: flex;
`

const Memoji = styled.img`
  height: 450px;
  opacity: 0;
  ${fadeInAnimation}

  @media (max-width: 768px) {
    height: 350px;
  }
`
