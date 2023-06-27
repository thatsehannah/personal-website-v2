import React from "react"
import { useWork } from "../../../utils/hooks/useWork"
import styled from "styled-components"
import { H2 } from "../../../styles/TextStyles"
import MainButton from "../../../components/buttons/MainButton"
import { Link } from "gatsby"
import ResumeWrapper from "../../../components/layout/ResumeWrapper"
import Letter from "../../../components/special/Letter"

const IntroWork = () => {
  const workData = useWork()
  const sliced = workData.slice(0, 2)

  return (
    <Wrapper>
      <ContentWrapper>
        <Title>
          Here's my recent <Letter />
          xperience
        </Title>
        <ResumeWrapper workData={sliced} />
        <SeeMoreWrapper>
          <ButtonWrapper>
            <Link to="/about#about-work">
              <MainButton text="See More" />
            </Link>
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
  width: 90%;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
    grid-template-columns: auto;
  }
`

const Title = styled(H2)`
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
