import React from "react"
import { useWork } from "../../../utils/hooks/useWork"
import styled from "styled-components"
import ResumeCard from "../../../components/cards/ResumeCard"
import { H3 } from "../../../styles/TextStyles"
import MainButton from "../../../components/buttons/MainButton"

const IntroWork = () => {
  const workData = useWork()
  const sliced = workData.slice(0, 2)

  return (
    <Wrapper>
      <ContentWrapper id="contentwrapper">
        <Title>Here's my recent experience</Title>
        <WorkWrapper>
          {sliced.map(({ node }) => (
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

const Wrapper = styled.section`
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

const Title = styled(H3)`
  @media (max-width: 768px) {
    text-align: center;
  }
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
