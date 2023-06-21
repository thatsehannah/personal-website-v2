import React from "react"
import styled from "styled-components"
import { useProjects } from "../../utils/hooks/useProjects"
import { BodyMain, H2, H3, MediumText } from "../../styles/TextStyles"
import { fadeInAnimation } from "../../styles/FadeInAnimation"

const Projects = () => {
  const projectData = useProjects()

  return (
    <Wrapper>
      {projectData.map(({ node }, index) => (
        <ContentWrapper key={index}>
          <ImageWrapper>
            <BackgroundWrapper i={index}>
              <Image src={node.imageUrl} alt={node.name} />
            </BackgroundWrapper>
          </ImageWrapper>
          <TitleWrapper>
            <H2>{node.name}</H2>
          </TitleWrapper>
          <DescriptionWrapper>
            <BodyMain>{node.description}</BodyMain>
          </DescriptionWrapper>
          <TextWrapper>
            <InfoWrapper>
              <InfoTitle>Domain</InfoTitle>
              <MediumText>{node.domain}</MediumText>
            </InfoWrapper>
            <InfoWrapper>
              <InfoTitle>Platform</InfoTitle>
              <MediumText>{node.platform}</MediumText>
            </InfoWrapper>
            <InfoWrapper>
              <InfoTitle>Code</InfoTitle>
              <a href={node.code} target="_blank" rel="noreferrer">
                <MediumText>GitHub</MediumText>
              </a>
            </InfoWrapper>
          </TextWrapper>
        </ContentWrapper>
      ))}
    </Wrapper>
  )
}

export default Projects

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  gap: 120px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
  ${fadeInAnimation}

  @media (max-width: 768px) {
    width: 100%;
  }
`

const ImageWrapper = styled.div`
  margin: 0px;
`

const BackgroundWrapper = styled.div`
  display: flex;
  flex: 1;
  width: 550px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  padding: 30px;
  background-color: ${props =>
    props.i % 2 === 0 ? "rgba(0, 147, 233, 0.4)" : "rgba(128, 208, 199, 0.4)"};

  @media (max-width: 768px) {
    height: 300px;
    padding: 10px;
    width: 100%;
  }
`

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`

const TitleWrapper = styled.div`
  text-align: center;
`

const DescriptionWrapper = styled.div`
  display: grid;
  /* align-items: center; */
  text-align: center;
  width: 100%;
  height: 100px;
  vertical-align: top;

  @media (max-width: 768px) {
    height: auto;
  }
`

const TextWrapper = styled.div`
  display: grid;
  justify-content: space-between;
  gap: 60px;
  grid-template-columns: repeat(3, 1fr);
`

const InfoWrapper = styled.div`
  display: grid;
  text-align: center;
  gap: 10px;
`

const InfoTitle = styled(H3)`
  font-weight: 500;
`
