import React from "react"
import styled from "styled-components"
import { BodyIntro, H3, MediumText } from "../../styles/TextStyles"

const StrengthCard = props => {
  return (
    <Wrapper rank={props.rank}>
      <ImageWrapper img={props.image} />
      <TextWrapper>
        <BodyIntro>
          {props.rank}. {props.title}
        </BodyIntro>
        <DescriptionWrapper>
          <MediumText>{props.description}</MediumText>
        </DescriptionWrapper>
      </TextWrapper>
    </Wrapper>
  )
}

export default StrengthCard

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 500px;
  padding: 20px;
  border-radius: 24px;
  background-color: ${props =>
    props.rank % 2 == 0
      ? "rgba(0, 147, 233, 0.2)"
      : "rgba(128, 208, 199, 0.2)"};
`

const ImageWrapper = styled.div`
  height: 400px;
  background-image: url(${props => props.img});
  background-size: cover;
  background-position: 30% 100%;
  border-radius: 24px;
`

const Image = styled.img`
  max-width: 100%;
  height: 100%;
  object-fit: contain;
`

const TextWrapper = styled.div`
  display: grid;
  height: 250px;
`

const DescriptionWrapper = styled.div`
  overflow: hidden;
  /* display: -webkit-box;
  -webkit-line-clamp: 3; */
  /* -webkit-box-orient: vertical; */
  /* vertical-align: top; */
  transition: 0.2s ease-out;
  backdrop-filter: blur(22px);

  /* :hover {
    display: grid;
    overflow: visible;
    height: auto;
    padding: 10px;
    transform: scale(1.2) translate(-50px, -10px);
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 10px;
    box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.2);
  } */
`
