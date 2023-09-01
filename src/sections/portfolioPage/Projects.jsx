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

// const ProjectWrapper = styled.div`
//   display: grid;
//   grid-template-columns: 2fr 1fr;
//   gap: 50px;
//   opacity: 0;
//   ${fadeInAnimation}

//   @media (max-width: 1024px) {
//     grid-template-columns: 1fr;
//     gap: 10px;
//   }
// `

// const TextWrapper = styled.div`
//   display: grid;
//   margin-top: 30px;
// `

// const TopWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 40px;

//   @media (max-width: 1024px) {
//     gap: 24px;
//   }
// `

// const TitleWrapper = styled.div`
//   display: flex;
//   gap: 12px;
//   align-items: center;

//   @media (max-width: 768px) {
//     justify-content: center;
//     gap: 8px;
//   }
// `

// const IconSpan = styled.span`
//   color: ${props => props.theme.secondaryColor};

//   svg {
//     transition: 0.5s ease-out;
//     :hover {
//       transform: scale(1.3);
//     }
//   }
// `

// const TechStackWrapper = styled.div`
//   display: flex;
//   gap: 50px;

//   @media (max-width: 768px) {
//     justify-content: center;
//     width: 100%;
//     gap: 20px;
//   }
// `

// const SmallCard = styled.div`
//   display: flex;
//   align-items: center;
//   width: 200px;
//   height: 60px;
//   border-radius: 8px;
//   font-weight: bold;
//   font-size: 1.1rem;
//   background-color: ${props => props.theme.projectCard.backgroundColor};
//   color: ${props =>
//     props.platform === "Web"
//       ? `${props.theme.secondaryColor}`
//       : `${props.theme.primaryColor}`};
//   overflow: hidden;

//   &::before {
//     content: "";
//     background-color: ${props =>
//       props.platform === "Web"
//         ? `${props.theme.secondaryColor}`
//         : `${props.theme.primaryColor}`};
//     width: 12px;
//     height: 100%;
//     margin-right: 10px;
//   }

//   @media (max-width: 768px) {
//     width: 160px;
//   }
// `

// const PlatformCard = styled(SmallCard)`
//   color: ${props => props.theme.projectCard.platformColor};

//   &::before {
//     background-color: ${props => props.theme.projectCard.platformColor};
//   }
// `

// const ButtonWrapper = styled.div`
//   display: grid;
//   justify-content: center;
// `
