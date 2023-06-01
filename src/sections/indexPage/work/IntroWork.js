import React from "react"
import { useWork } from "../../../utils/hooks/useWork"
import styled from "styled-components"
import Card from "../../../components/cards/ResumeCard"
import { H3 } from "../../../styles/TextStyles"
import MainButton from "../../../components/buttons/MainButton"

const IntroWork = () => {
  const workData = useWork()
  const sliced = workData.slice(0, 2)

  return (
    <Wrapper>
      <ContentWrapper id="contentwrapper">
        <TitleWrapper>
          <H3Wrapper>
            <H3>Here's my recent experience</H3>
          </H3Wrapper>
        </TitleWrapper>
        <WorkWrapper>
          {sliced.map(({ node }) => (
            <Card
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
        <SeeMoreWrapper>
          <ButtonWrapper>
            <MainButton text="See More" />
          </ButtonWrapper>
        </SeeMoreWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default IntroWork

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 20px;
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

const TitleWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  justify-content: space-between;

  @media (max-width: 768px) {
    gap: 20px;
    justify-content: center;
  }
`

const H3Wrapper = styled.div`
  display: grid;
  align-items: center;
`

const SeeMoreWrapper = styled.div`
  display: grid;
  justify-content: center;
`

const ButtonWrapper = styled.div`
  width: 150px;
`

const WorkWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 40px;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    width: 100%;
    grid-template-columns: auto;
  }
`
