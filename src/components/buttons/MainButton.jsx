import React from "react"
import styled from "styled-components"
import { Caption2 } from "../../styles/TextStyles"

const MainButton = props => {
  const { onClick, disabled, text, icon } = props

  return (
    <Button onClick={onClick} disabled={disabled}>
      <TextWrapper>
        <Title>{text}</Title>
        {icon && <div>{icon}</div>}
      </TextWrapper>
    </Button>
  )
}

export default MainButton

const Button = styled.button`
  padding: 24px;
  background: ${props => props.theme.primaryColor};
  border-radius: 50px;
  display: grid;
  align-items: center;
  justify-items: center;
  gap: 20px;
  border: ${props => props.theme.border};

  *,
  & {
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  &:hover {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
      0px 30px 60px rgba(0, 147, 233, 0.5),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
    transform: translateY(10px);
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.3;
    box-shadow: none;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 1024px) {
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
