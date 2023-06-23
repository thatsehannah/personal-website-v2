import React from "react"
import styled from "styled-components"
import { useProjects } from "../../utils/hooks/useProjects"
import WebpageWrapper from "./WebpageWrapper"
import { BodyMain, H3 } from "../../styles/TextStyles"
import MobileWrapper from "./MobileWrapper"
import { fadeInAnimation } from "../../styles/FadeInAnimation"
import MainButton from "../../components/buttons/MainButton"

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
              <Name>{node.name}</Name>
              <TechStackWrapper>
                <SmallCard platform={node.platform}>{node.platform}</SmallCard>
                <PlatformCard>{node.domain}</PlatformCard>
              </TechStackWrapper>
              <BodyMain>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus
                mattis nunc aliquam tincidunt est non. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Lectus mattis nunc aliquam
                tincidunt est non. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Lectus mattis nunc aliquam tincidunt est non.
              </BodyMain>
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
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 50px;
  ${fadeInAnimation}

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const TextWrapper = styled.div`
  display: grid;
`

const TopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
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
    width: 100%;
    justify-content: center;
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
