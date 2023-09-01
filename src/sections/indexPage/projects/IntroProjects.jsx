import React from "react"
import styled from "styled-components"
import { H2 } from "../../../styles/TextStyles"
import MainButton from "../../../components/buttons/MainButton"
import { Link } from "gatsby"
import Letter from "../../../components/special/Letter"
import { useProjects } from "../../../utils/hooks/useProjects"
import ProjectWrapper from "../../../components/layout/ProjectWrapper"

const IntroProjects = () => {
  const projectData = useProjects()

  return (
    <Wrapper>
      <ContentWrapper>
        <TitleWrapper>
          <H2>
            Check out my Lat
            <Letter />
            st Project
          </H2>
        </TitleWrapper>
        <ProjectWrapper node={projectData[0].node} displayCodeButton={false} />
        <SeeMoreWrapper>
          <div>
            <Link to="/portfolio">
              <MainButton text="View All Projects" />
            </Link>
          </div>
        </SeeMoreWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default IntroProjects

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
