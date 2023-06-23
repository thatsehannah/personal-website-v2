import React from "react"
import styled from "styled-components"
import { BodyIntro, MediumText } from "../../styles/TextStyles"

const StrengthCard = props => {
  return (
    <Wrapper rank={props.rank}>
      <ImageWrapper img={props.image} />
      <TextWrapper>
        <BodyIntro>
          {props.rank}. {props.title}
        </BodyIntro>
        <DescriptionWrapper>
          <DescriptionText>{props.description}</DescriptionText>
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

  @media (max-width: 768px) {
    width: 400px;
  }
`

const ImageWrapper = styled.div`
  height: 300px;
  background-image: url(${props => props.img});
  background-size: cover;
  background-position: 30% 100%;
  border-radius: 24px;
  border: ${props => props.theme.border};

  @media (max-width: 768px) {
    height: 270px;
  }
`

const TextWrapper = styled.div`
  display: grid;
  gap: 10px;
`

const DescriptionWrapper = styled.div`
  height: 185px;
`

const DescriptionText = styled(MediumText)`
  @media (max-width: 768px) {
    line-height: 1.5;
  }
`
