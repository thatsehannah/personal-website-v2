import React, { useState } from "react"
import styled from "styled-components"

const HamburgerButton = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOnClick = e => {
    console.log(isOpen)
    e.preventDefault()
    setIsOpen(!isOpen)
  }

  return (
    <Wrapper>
      <Hamburger isOpen={isOpen} onClick={e => handleOnClick(e)}></Hamburger>
    </Wrapper>
  )
}

export default HamburgerButton

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  /* border: 1px solid black; */
`

const Hamburger = styled.div`
  width: 45px;
  height: 4px;
  background-color: #80d0c7;
  border-radius: 5px;
  transition: all 0.5s ease-in-out;

  ${props =>
    props.isOpen &&
    `
      transform: translateX(-50px);
      background: transparent;
    `};

  ::before,
  ::after {
    content: "";
    position: absolute;
    width: 45px;
    height: 4px;
    background-color: #80d0c7;
    border-radius: 5px;
    transition: all 0.5s ease-in-out;
  }

  ::before {
    transform: translateY(-16px);
    ${props =>
      props.isOpen &&
      `
      transform: rotate(45deg) translate(35px, -35px);
    `}
  }

  ::after {
    transform: translateY(16px);
    ${props =>
      props.isOpen &&
      `
      transform: rotate(-45deg) translate(35px, 35px);
    `}
  }
`
