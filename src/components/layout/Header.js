import { Link } from "gatsby"
import React, { useState } from "react"
import styled, { keyframes } from "styled-components"
import MenuButton from "../buttons/MenuButton"
import { UilEnvelope } from "@iconscout/react-unicons"
import Logo from "../special/Logo"
import { menuOptions } from "../../data/menuOptions"
import HamburgerIcon from "../buttons/HamburgerIcon"
import MobileMenu from "../menus/MobileMenu"

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  const handleToggle = () => {
    setToggleMenu(!toggleMenu)
  }

  return (
    <Wrapper>
      <ContentWrapper>
        <LogoWrapper>
          <Link to="/">
            <Logo />
          </Link>
        </LogoWrapper>
        <MenuWrapper count={menuOptions.length}>
          {menuOptions.map((item, i) => (
            <Link to={item.link} key={i}>
              <MenuButton
                title={item.title}
                color="#0093e9"
                hoverColor="#80d0c7"
              />
            </Link>
          ))}
        </MenuWrapper>
        <EmailWrapper>
          <a href="mailto:elliotchannah@outlook.com">
            <MenuButton
              title="elliotchannah@outlook.com"
              icon={<UilEnvelope color="#0093e9" size="22" />}
              color="#0093e9"
              hoverColor="#80d0c7"
            />
          </a>
        </EmailWrapper>
        <HamburgerWrapper onClick={handleToggle}>
          <HamburgerIcon />
        </HamburgerWrapper>
      </ContentWrapper>

      <MobileMenuWrapper isActive={toggleMenu}>
        <MobileMenu />
      </MobileMenuWrapper>
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
  display: grid;
  width: 100%;
  padding: 30px;
  justify-items: center;
  align-items: center;

  @media (max-width: 768px) {
    padding: 20px;
  }
`

const ContentWrapper = styled.div`
  display: grid;
  width: 1300px;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, auto);
    width: 100%;
  }
`

const LogoWrapper = styled.div`
  display: grid;
  justify-items: left;
  justify-content: left;
`

const MenuWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.count}, auto);
  gap: 24px;
  align-items: center;
  justify-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`

const EmailWrapper = styled.div`
  display: grid;
  justify-items: right;
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    display: none;
  }
`

const HamburgerWrapper = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: inline-block;
  }
`

const slideDownAnimation = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
`

const slideUpAnimation = keyframes`
  0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(-100%);
  }
`

const MobileMenuWrapper = styled.div`
  display: none;
  animation: ${props =>
      props.isActive ? slideDownAnimation : slideUpAnimation}
    0.3s ease-in-out;
  background-color: #fff;
  padding: 20px;

  @media (max-width: 768px) {
    ${props =>
      props.isActive &&
      `
        border-bottom: 0.5px solid black;
        position: absolute;
        top: 55px;
        width: 100%;
        display: inline-block;
        z-index: 4;
        
    `}
  }
`
