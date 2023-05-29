import React from "react"
import styled from "styled-components"

const HamburgerButton = () => {
  return (
    <Wrapper>
      <Hamburger></Hamburger>
    </Wrapper>
  )
}

export default HamburgerButton

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
`

const Hamburger = styled.div`
  width: 50px;
  height: 6px;
  background-color: #fff;
  border-radius: 5px;
  transition: all 0.5s ease-in-out;

  ::before,
  ::after {
    content: "";
    position: absolute;
    width: 50px;
    height: 6px;
    background-color: #fff;
    border-radius: 5px;
    transition: all 0.5s ease-in-out;
  }

  ::before {
    transform: translateY(-16px);
  }

  ::after {
    transform: translateY(16px);
  }
`
