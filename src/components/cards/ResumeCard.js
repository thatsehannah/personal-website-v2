import React from "react"
import styled from "styled-components"
import { H3, Caption, MediumText } from "../../styles/TextStyles"

const ResumeCard = props => {
  return (
    <Wrapper>
      <LogoWrapper>
        <WorkLogo src={props.logo} />
      </LogoWrapper>
      <EmphasisWrapper>
        <TitleWrapper>
          <Title>{props.title}</Title>
        </TitleWrapper>
        <Duration>
          {props.start} - {props.end}
        </Duration>
      </EmphasisWrapper>
      <SecondaryTextWrapper overflow={props.overflow}>
        <SecondaryText>{props.secondaryText}</SecondaryText>
      </SecondaryTextWrapper>
    </Wrapper>
  )
}

export default ResumeCard

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 480px;
  height: 250px;
  gap: 16px;
  background-color: rgb(239, 239, 240);
  border-radius: 20px;
  border: 0.5px solid black;
  padding: 20px;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`

const LogoWrapper = styled.div`
  width: 300px;
`

const WorkLogo = styled.img`
  max-width: 100%;
  height: 70px;
  object-fit: contain;
`

const EmphasisWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;

  @media (max-width: 450px) {
    grid-template-columns: auto;
    gap: 10px;
  }
`

const TitleWrapper = styled.div`
  width: 270px;
`

const Title = styled(H3)`
  font-size: 1.2rem;
`

const Duration = styled(Caption)`
  color: rgba(0, 0, 0, 0.6);
`
//for future reference: https://css-tricks.com/line-clampin/
const SecondaryTextWrapper = styled.div`
  overflow: ${props => props.overflow && `hidden`};
  /* height: 62px; */
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  transition: 0.2s ease-out;
  backdrop-filter: blur(22px);

  :hover {
    display: grid;
    overflow: visible;
    height: auto;
    padding: 10px;
    transform: scale(1.2) translate(-50px, -10px);
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 10px;
    box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    pointer-events: none;
  }
`

const SecondaryText = styled(MediumText)`
  font-size: 1rem;
  line-height: 1.4;
  color: rgba(0, 0, 0, 0.6);
`
