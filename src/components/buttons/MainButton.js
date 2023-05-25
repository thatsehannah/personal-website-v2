import React from "react"
import styled from "styled-components"
import { Caption2 } from "../../styles/TextStyles"

const MainButton = props => {
  return (
    <Wrapper>
      <TextWrapper>
        <Title>{props.title}</Title>
        <IconWrapper>{props.icon && props.icon}</IconWrapper>
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
  color: black;
  display: grid;
  grid-template-columns: auto auto;
  justify-items: center;
  align-items: center;
  gap: 7px;
`

const Title = styled(Caption2)`
  text-align: center;
  justify-items: center;
`

const IconWrapper = styled.div``
