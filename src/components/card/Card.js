import React from "react"
import styled from "styled-components"
import { H3, Caption, MediumText } from "../../styles/TextStyles"

const Card = props => {
  return (
    <Wrapper>
      <LogoWrapper>
        <WorkLogo src={props.logo} />
      </LogoWrapper>
      <EmphasisWrapper>
        <PositionWrapper>
          <Position>{props.position}</Position>
        </PositionWrapper>

        <Duration>
          {props.start} - {props.end}
        </Duration>
      </EmphasisWrapper>
      <DutyWrapper overflow={props.overflow}>
        <Duty>{props.duties}</Duty>
      </DutyWrapper>
    </Wrapper>
  )
}

export default Card

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 480px;
  height: 250px;
  gap: 16px;
  background-color: rgb(239, 239, 240);
  border-radius: 20px;
  padding: 25px;

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

const PositionWrapper = styled.div`
  width: 270px;
`

const Position = styled(H3)`
  font-size: 1.2rem;
`

const Duration = styled(Caption)`
  color: rgba(0, 0, 0, 0.6);
`

const DutyWrapper = styled.div`
  overflow: ${props => props.overflow && `hidden`};
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  transition: 0.5s ease-out;

  :hover {
    display: grid;
    overflow: visible;
    height: auto;
    padding: 10px;
    transform: scale(1.2) translate(-50px, -10px);
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(22px);
    border-radius: 10px;
    box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.6);
  }

  @media (max-width: 768px) {
    pointer-events: none;
  }
`

const Duty = styled(MediumText)`
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.6);
  /* text-overflow: ellipsis; */
`
