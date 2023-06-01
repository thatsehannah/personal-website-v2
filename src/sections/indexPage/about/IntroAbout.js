import React, { useEffect, useRef, useState } from "react"
import styled, { css, keyframes } from "styled-components"
import { BodyMain, H3 } from "../../../styles/TextStyles"
import MainButton from "../../../components/buttons/MainButton"

const IntroAbout = () => {
  const ref = useRef(null)
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.4,
      }
    )
    console.log(isIntersecting)
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [isIntersecting])

  return (
    <Wrapper>
      <ContentWrapper>
        <LeftSide ref={ref}>
          <Background />
          <Memoji
            src="/images/memojis/about-memoji.png"
            inView={isIntersecting}
          ></Memoji>
        </LeftSide>
        <RightSide>
          <TextWrapper id="textwrapper">
            <H3>About Me</H3>
            <BodyMain>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus
              mattis nunc aliquam tincidunt est non. Viverra nec eu, in
              ridiculus egestas mi. Vulputate tristique porttitor enim aliquam
              ullamcorper. Velit dui laoreet in et mus.
            </BodyMain>
            <ButtonWrapper>
              <MainButton text="Learn More About Me" />
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
  width: 1300px;
  margin: 0 auto;

  gap: 60px;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column-reverse;
  }
`

const LeftSide = styled.div`
  position: relative;
  display: flex;

  @media (max-width: 768px) {
    justify-content: center;
  }
`

const fadeInKeyFrame = keyframes`
  from {
    opacity: 0;
    transform: translateY(-40px);
    filter: blur(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
    filter: blur(0px);
  }
`

const fadeOutKeyFrame = keyframes`
  from {
    opacity: 1;
    transform: translateY(0px);
    filter: blur(0px);
  }
  to {
    opacity: 0;
    transform: translateY(-40px);
    filter: blur(10px);
  }
`

const fadeInAnimation = css`
  animation: ${fadeInKeyFrame} 1s forwards;
`

const fadeOutAnimation = css`
  animation: ${fadeOutKeyFrame} 1s forwards;
`

const Background = styled.div`
  position: absolute;
  right: 0;
  z-index: -1;
  height: 90%;
  width: 90%;
  border-radius: 20px;
  background-color: rgba(128, 208, 199, 0.2);
`

const Memoji = styled.img`
  display: inline-block;
  height: 500px;
  width: 500px;
  opacity: 0;
  transition: opacity 1s ease-in;
  ${props => (props.inView ? fadeInAnimation : fadeOutAnimation)}

  @media (max-width: 768px) {
    height: 250px;
    width: 250px;
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
