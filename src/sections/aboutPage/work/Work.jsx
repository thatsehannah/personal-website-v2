import React, { useRef } from "react"
import styled from "styled-components"
import { useWork } from "../../../utils/hooks/useWork"
import { H2 } from "../../../styles/TextStyles"
import Letter from "../../../components/special/Letter"
import ResumeWrapper from "../../../components/layout/ResumeWrapper"
import { useIntersection } from "../../../utils/hooks/useIntersection"
import { fadeInAnimation } from "../../../styles/FadeInAnimation"

const Work = () => {
  const ref = useRef(null)
  const inView = useIntersection(ref)
  const workData = useWork()
  return (
    <Wrapper id="about-work" ref={ref} inView={inView}>
      <BackgroundSquare />
      <ContentWrapper>
        <div>
          <H2>
            Professional <Letter />
            xperience 👨🏾‍💻
          </H2>
        </div>
        <ResumeWrapper workData={workData} />
      </ContentWrapper>
    </Wrapper>
  )
}

export default Work

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 60px 20px 160px;
  opacity: 0;
  transition: opacity 1s ease-in;
  ${props => props.inView && fadeInAnimation}

  @media (max-width: 1024px) {
    padding-bottom: 60px;
  }
`

const BackgroundSquare = styled.div`
  position: absolute;
  background-color: ${props => props.theme.lightSecondaryColor};
  height: 50%;
  width: 50%;
  border-radius: 20px;
  z-index: -1;

  @media (max-width: 1024px) {
    display: none;
  }
`

const ContentWrapper = styled.div`
  display: grid;
  gap: 30px;
  width: 90%;
  margin: 0 auto;

  @media (max-width: 1024px) {
    width: 100%;
    grid-template-columns: auto;
  }
`
