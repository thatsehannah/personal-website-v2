import React, { useRef } from "react"
import styled from "styled-components"
import { BodyMain, H2 } from "../../../styles/TextStyles"
import MainButton from "../../../components/buttons/MainButton"
import { useAboutMeData } from "../../../utils/hooks/useAboutMeData"
import { Link } from "gatsby"
import { useIntersection } from "../../../utils/hooks/useIntersection"
import { fadeInAnimation } from "../../../styles/FadeInAnimation"

const IntroAbout = () => {
  const ref = useRef(null)
  const inView = useIntersection(ref, { threshold: 0.4 })

  const text = useAboutMeData().find(edge => edge.node.for === "homePage").node
    .text

  return (
    <Wrapper>
      <ContentWrapper>
        <LeftSide ref={ref}>
          <Background />
          <Memoji
            src="/images/memojis/about-memoji.png"
            inView={inView}
          ></Memoji>
        </LeftSide>
        <RightSide>
          <TextWrapper id="textwrapper">
            <H2>Who Am I?</H2>
            <BodyMain>{text && text}</BodyMain>
            <ButtonWrapper>
              <Link to="/about#story">
                <MainButton text="Learn More About Me" />
              </Link>
            </ButtonWrapper>
          </TextWrapper>
        </RightSide>
      </ContentWrapper>
    </Wrapper>
  )
}

export default IntroAbout

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 20px;

  @media (max-width: 768px) {
    padding: 0px 20px 100px;
  }
`

const ContentWrapper = styled.div`
  display: flex;
  width: 1400px;
  margin: 0 auto;
  gap: 60px;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`

const LeftSide = styled.div`
  position: relative;
  display: flex;

  @media (max-width: 768px) {
    justify-content: center;
  }
`

const Background = styled.div`
  position: absolute;
  right: 0;
  z-index: -1;
  height: 90%;
  width: 90%;
  border-radius: 20px;
  background-color: ${props => props.theme.lightPrimaryColor};

  @media (max-width: 768px) {
    display: none;
  }
`

const Memoji = styled.img`
  display: inline-block;
  height: 500px;
  opacity: 0;
  transition: opacity 1s ease-in;
  ${props => props.inView && fadeInAnimation}

  @media (max-width: 768px) {
    height: 350px;
  }
`

const RightSide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-items: left;
`
