import React, { useState } from "react"
import styled from "styled-components"

const HamburgerIcon = () => {
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
    setIsClicked(!isClicked)
  }
  return (
    <HamburgerWrapper isActive={isClicked} onClick={handleClick}>
      <Line isActive={isClicked} />
      <Line isActive={isClicked} />
      <Line isActive={isClicked} />
    </HamburgerWrapper>
  )
}

export default HamburgerIcon

const HamburgerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 24px;
  gap: 5px;
  cursor: pointer;
  transition: transform 0.3s;

  ${({ isActive }) =>
    isActive &&
    `
    transform: rotate(90deg);
  `}
`

const Line = styled.span`
  width: 100%;
  height: 4px;
  background-color: #80d0c7;
  transition: transform 0.3s;

  ${({ isActive }) =>
    isActive &&
    `
    &:nth-child(1) {
      transform: translateY(9px) rotate(45deg);
    }

    &:nth-child(2) {
      opacity: 0;
    }

    &:nth-child(3) {
      transform: translateY(-9px) rotate(-45deg);
    }
  `}
`
