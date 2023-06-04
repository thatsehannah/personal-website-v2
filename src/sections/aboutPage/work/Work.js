import React from "react"
import styled from "styled-components"
import { useWork } from "../../../utils/hooks/useWork"
import { H2 } from "../../../styles/TextStyles"
import ResumeCard from "../../../components/cards/ResumeCard"
import Letter from "../../../components/special/Letter"

const Work = () => {
  const workData = useWork()
  return (
    <Wrapper id="about-work">
      <BackgroundSquare />
      <ContentWrapper>
        <Title>
          Relevant <Letter />
          xperience
        </Title>
        <WorkWrapper>
          {workData.map(({ node }) => (
            <ResumeCard
              overflow={"true"}
              key={node.uid}
              logo={node.logo}
              title={node.position}
              secondaryText={node.duties}
              start={node.start}
              end={node.end}
            />
          ))}
        </WorkWrapper>
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
  background-color: rgba(0, 147, 233, 0.05);
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

const WorkWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 40px;
  justify-content: center;
  align-items: center;

  > :last-child {
    margin-left: auto;
    margin-right: auto;
    grid-column-start: 1;
    grid-column-end: 3;
  }

  @media (max-width: 768px) {
    width: 100%;
    grid-template-columns: auto;

    > :last-child {
      margin-left: initial;
      margin-right: initial;
      grid-column-start: initial;
      grid-column-end: initial;
    }
  }
`
