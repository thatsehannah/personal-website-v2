import React from "react"
import styled from "styled-components"
import { useProjects } from "../../utils/hooks/useProjects"
import WebpageWrapper from "./WebpageWrapper"
import { BodyMain, H3 } from "../../styles/TextStyles"
import MobileWrapper from "./MobileWrapper"
import { fadeInAnimation } from "../../styles/FadeInAnimation"
import MainButton from "../../components/buttons/MainButton"
import { UilExternalLinkAlt as ExternalLink } from "@iconscout/react-unicons"

const Projects = () => {
  const projectData = useProjects()

  return (
    <Wrapper>
      {projectData.map(({ node }, index) => (
        <ContentWrapper key={index}>
          {node.platform === "Web" && <WebpageWrapper image={node.imageUrl} />}
          {node.platform === "iOS" && <MobileWrapper image={node.imageUrl} />}
          <TextWrapper>
            <TopWrapper>
              <TitleWrapper>
                <Name>{node.name}</Name>
                {node.live && (
                  <a href={node.live} target="_blank" rel="noreferrer">
                    {" "}
                    <IconSpan>
                      <ExternalLink />{" "}
                    </IconSpan>
                  </a>
                )}
              </TitleWrapper>
              <TechStackWrapper>
                <SmallCard platform={node.platform}>{node.platform}</SmallCard>
                <PlatformCard>{node.domain}</PlatformCard>
              </TechStackWrapper>
              <BodyMain>{node.description}</BodyMain>
              <ButtonWrapper>
                <a href={node.code} target="_blank" rel="noreferrer">
                  <MainButton text="See Code" />
                </a>
              </ButtonWrapper>
            </TopWrapper>
          </TextWrapper>
        </ContentWrapper>
      ))}
    </Wrapper>
  )
}

export default Projects

const Wrapper = styled.div`
  display: grid;
  gap: 120px;

  @media (max-width: 768px) {
    gap: 80px;
  }
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 50px;
  opacity: 0;
  ${fadeInAnimation}

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`

const TextWrapper = styled.div`
  display: grid;
  margin-top: 30px;
`

const TopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (max-width: 768px) {
    gap: 24px;
  }
`

const TitleWrapper = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`

const IconSpan = styled.span`
  color: ${props => props.theme.secondaryColor};

  svg {
    transition: 0.5s ease-out;
    :hover {
      transform: scale(1.3);
    }
  }
`

const Name = styled(H3)`
  @media (max-width: 768px) {
    text-align: center;
  }
`

const TechStackWrapper = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    justify-content: center;
    width: 100%;
  }
`

const SmallCard = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  height: 60px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1.1rem;
  background-color: ${props => props.theme.projectCard.backgroundColor};
  color: ${props =>
    props.platform === "Web"
      ? `${props.theme.secondaryColor}`
      : `${props.theme.primaryColor}`};
  overflow: hidden;

  &::before {
    content: "";
    background-color: ${props =>
      props.platform === "Web"
        ? `${props.theme.secondaryColor}`
        : `${props.theme.primaryColor}`};
    width: 12px;
    height: 100%;
    margin-right: 10px;
  }

  @media (max-width: 768px) {
    width: 160px;
  }
`

const PlatformCard = styled(SmallCard)`
  color: ${props => props.theme.projectCard.platformColor};

  &::before {
    background-color: ${props => props.theme.projectCard.platformColor};
  }
`

const ButtonWrapper = styled.div`
  display: grid;
  justify-content: center;
`
