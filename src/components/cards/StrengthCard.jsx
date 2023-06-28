import React from "react"
import styled from "styled-components"
import { BodyMain, H3 } from "../../styles/TextStyles"

const StrengthCard = props => {
  return (
    <Wrapper rank={props.rank}>
      <ImageWrapper img={props.image} />
      <TextWrapper>
        <H3>
          {props.rank}. {props.title}
        </H3>
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
`

const TextWrapper = styled.div`
  display: grid;
  gap: 10px;
`

const DescriptionWrapper = styled.div`
  height: 185px;
`

const DescriptionText = styled(BodyMain)`
  @media (max-width: 1024px) {
    line-height: 1.5;
  }
`
