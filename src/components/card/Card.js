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
      <DutyWrapper>
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
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`

const Duty = styled(MediumText)`
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.6);
  /* text-overflow: ellipsis; */
`
