import React from "react"
import styled from "styled-components"
import MainButton from "../../components/buttons/MainButton"
import { BodyMain, H2 } from "../../styles/TextStyles"
import { fadeInAnimation } from "../../styles/FadeInAnimation"
import WebpageWrapper from "./WebpageWrapper"
import MobileWrapper from "./MobileWrapper"
import { UilExternalLinkAlt as ExternalLink } from "@iconscout/react-unicons"

const ProjectWrapper = ({ node, displayCodeButton = true }) => {
  let externalIconSize

  if (typeof window !== "undefined") {
    externalIconSize = window.innerWidth <= 768 ? 22 : 28
  }

  return (
    <ContentWrapper>
      {node.platform === "Web" && (
        <WebpageWrapper image={node.imageUrl} altText={node.name} />
      )}
      {node.platform === "iOS" && (
        <MobileWrapper image={node.imageUrl} altText={node.name} />
      )}
      <TextWrapper>
        <TopWrapper>
          <TitleWrapper>
            <H2>
              {node.name}{" "}
              {node.live && (
                <a href={node.live} target="_blank" rel="noreferrer">
                  {" "}
                  <IconSpan>
                    <ExternalLink size={externalIconSize} />{" "}
                  </IconSpan>
                </a>
              )}
            </H2>
          </TitleWrapper>
          <TechStackWrapper>
            <SmallCard platform={node.platform}>{node.platform}</SmallCard>
            <PlatformCard>{node.domain}</PlatformCard>
          </TechStackWrapper>
          <BodyMain>{node.description}</BodyMain>
          {displayCodeButton && (
            <ButtonWrapper>
              <a href={node.code} target="_blank" rel="noreferrer">
                <MainButton text="See Code" />
              </a>
            </ButtonWrapper>
          )}
        </TopWrapper>
      </TextWrapper>
    </ContentWrapper>
  )
}

export default ProjectWrapper

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 50px;
  opacity: 0;
  ${fadeInAnimation}

  @media (max-width: 1024px) {
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

  @media (max-width: 1024px) {
    gap: 24px;
  }
`

const TitleWrapper = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 8px;
  }
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

const TechStackWrapper = styled.div`
  display: flex;
  gap: 50px;

  @media (max-width: 768px) {
    justify-content: center;
    width: 100%;
    gap: 20px;
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
