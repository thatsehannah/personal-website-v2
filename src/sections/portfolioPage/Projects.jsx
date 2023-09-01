import React from "react"
import styled from "styled-components"
import { useProjects } from "../../utils/hooks/useProjects"
import { BodyMain } from "../../styles/TextStyles"
import ProjectWrapper from "../../components/layout/ProjectWrapper"

const Projects = () => {
  const projectData = useProjects()

  return (
    <Wrapper>
      <DisclaimerWrapper>
        <BodyMain>
          The following are my favorite projects I've worked on over the years.
          To see all of my work, please visit my{" "}
          <GitHubAnchor
            href="https://github.com/thatsehannah"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </GitHubAnchor>{" "}
          profile.
        </BodyMain>
      </DisclaimerWrapper>
      <ContentWrapper>
        {projectData.map(({ node }, index) => (
          <ProjectWrapper node={node} key={index} />
        ))}
      </ContentWrapper>
    </Wrapper>
  )
}

export default Projects

const Wrapper = styled.div`
  display: grid;
  gap: 40px;
`

const DisclaimerWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
`

const GitHubAnchor = styled.a`
  color: ${props => props.theme.secondaryColor};
  transition: 0.3s ease-out;

  :hover {
    color: ${props => props.theme.primaryColor};
  }
`

const ContentWrapper = styled.div`
  display: grid;
  gap: 120px;

  @media (max-width: 1024px) {
    gap: 80px;
  }
`
