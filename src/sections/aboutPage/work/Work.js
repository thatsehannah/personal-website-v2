import React from "react"
import styled from "styled-components"
import { useWork } from "../../../utils/hooks/useWork"
import { H2 } from "../../../styles/TextStyles"
import Letter from "../../../components/special/Letter"
import ResumeWrapper from "../../../components/layout/ResumeWrapper"

const Work = () => {
  const workData = useWork()
  return (
    <Wrapper id="about-work">
      <BackgroundSquare />
      <ContentWrapper>
        <Title>
          Professional <Letter />
          xperience 👨🏾‍💻
        </Title>
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
  padding: 60px 20px;
`

const BackgroundSquare = styled.div`
  position: absolute;
  background-color: rgba(0, 147, 233, 0.2);
  height: 50%;
  width: 50%;
  border-radius: 20px;
  z-index: -1;

  @media (max-width: 768px) {
    display: none;
  }
`

const ContentWrapper = styled.div`
  display: grid;
  gap: 50px;
  width: 1300px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
    grid-template-columns: auto;
  }
`

const Title = styled(H2)`
  text-align: center;
`
