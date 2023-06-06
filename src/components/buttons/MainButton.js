import React from "react"
import styled from "styled-components"
import { Caption2 } from "../../styles/TextStyles"

const MainButton = props => {
  return (
    <Wrapper>
      <TextWrapper>
        <Title>{props.text}</Title>
        <IconWrapper>{props.icon && props.icon}</IconWrapper>
      </TextWrapper>
    </Wrapper>
  )
}

export default MainButton

const Wrapper = styled.div`
  padding: 24px;
  background: #80d0c7;
  border-radius: 50px;
  display: grid;
  align-items: center;
  justify-items: center;
  gap: 20px;
  border: 0.5px solid black;

  *,
  & {
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  :hover {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
      0px 30px 60px rgba(0, 147, 233, 0.5),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
    transform: translateY(10px);
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 100%;
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
