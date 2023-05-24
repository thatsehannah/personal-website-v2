import React from "react"
import styled from "styled-components"
import { Caption2 } from "../../styles/TextStyles"

const MainButton = props => {
  const { title } = props

  return (
    <Wrapper>
      <TextWrapper>
        <Title>{title}</Title>
      </TextWrapper>
    </Wrapper>
  )
}

export default MainButton

const Wrapper = styled.div`
  width: 280px;
  height: 77px;
  padding: 12px;
  background: linear-gradient(180deg, #fff 0%, #7cace7 100%);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
    0px 20px 40px rgba(124, 172, 231, 0.2),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  display: grid;
  align-items: center;
  justify-items: center;
  gap: 20px;

  *,
  & {
    transition: 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  :hover {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
      0px 30px 60px rgba(124, 172, 231, 0.5),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
    transform: translateY(-3px);
    cursor: pointer;
  }
`

const TextWrapper = styled.div`
  display: grid;
  gap: 4px;
`

const Title = styled(Caption2)`
  color: black;
`
