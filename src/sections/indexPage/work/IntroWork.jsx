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
        <TitleWrapper>
          <H2>
            Here's my recent <Letter />
            xperience
          </H2>
        </TitleWrapper>

        <ResumeWrapper workData={sliced} />
        <SeeMoreWrapper>
          <div>
            <Link to="/about#about-work">
              <MainButton text="View All Work History" />
            </Link>
          </div>
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

  @media (max-width: 1024px) {
    width: 100%;
    grid-template-columns: auto;
  }
`

const TitleWrapper = styled.div`
  display: grid;
  @media (max-width: 1024px) {
    justify-content: center;
  }
`

const SeeMoreWrapper = styled.div`
  display: grid;
  justify-content: center;
`
