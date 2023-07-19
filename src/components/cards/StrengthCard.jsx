import React from "react"
import styled from "styled-components"
import { BodyMain, H3 } from "../../styles/TextStyles"

const StrengthCard = props => {
  const { rank, image, altText, title, description } = props
  return (
    <Wrapper>
      <ImageWrapper role="img" img={image} aria-label={altText} />
      <TextWrapper>
        <H3>
          {rank}. {title}
        </H3>
        <DescriptionWrapper>
          <DescriptionText>{description}</DescriptionText>
        </DescriptionWrapper>
      </TextWrapper>
    </Wrapper>
  )
}

export default StrengthCard

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 500px;
  padding: 25px;
  border-radius: 24px;
  border: ${props => props.theme.border};

  @media (max-width: 1024px) {
    width: 400px;
  }

  @media (max-width: 768px) {
    width: 330px;
    height: auto;
  }
`

const ImageWrapper = styled.div`
  height: 300px;
  background-image: url(${props => props.img});
  background-size: cover;
  background-position: 30% 100%;
  border-radius: 24px;
  border: ${props => props.theme.border};

  @media (max-width: 1024px) {
    height: 270px;
  }

  @media (max-width: 768px) {
    height: 220px;
  }
`

const TextWrapper = styled.div`
  display: grid;
  gap: 10px;
`

const DescriptionWrapper = styled.div`
  height: 185px;

  @media (max-width: 1024px) {
    height: 220px;
  }
`

const DescriptionText = styled(BodyMain)`
  @media (max-width: 1024px) {
    line-height: 1.4;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`
