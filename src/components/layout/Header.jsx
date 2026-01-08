import { Link } from "gatsby"
import React, { useState } from "react"
import styled, { useTheme } from "styled-components"
import MenuButton from "../buttons/MenuButton"
import { UilEnvelope } from "@iconscout/react-unicons"
import Logo from "../special/Logo"
import { menuOptions } from "../../data/menuOptions"
import HamburgerIcon from "../buttons/HamburgerIcon"
import MobileMenuItems from "../menus/MobileMenuItems"

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const theme = useTheme()

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
                color={theme.secondaryColor}
                hoverColor={theme.primaryColor}
              />
            </Link>
          ))}
        </MenuWrapper>
        <EmailWrapper>
          <a href="mailto:elliotchannahiii@gmail.com">
            <MenuButton
              title="elliotchannahiii@gmail.com"
              icon={<UilEnvelope color={theme.secondaryColor} size="22" />}
              color={theme.secondaryColor}
              hoverColor={theme.primaryColor}
            />
          </a>
        </EmailWrapper>
        <HamburgerWrapper onClick={handleToggle}>
          <HamburgerIcon />
        </HamburgerWrapper>
      </ContentWrapper>
      <MobileMenuWrapper>
        <MobileMenu isOpen={toggleMenu}>
          <MobileMenuItems />
        </MobileMenu>
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
  gap: 20px;

  @media (max-width: 1024px) {
    padding: 20px;
  }
`

const ContentWrapper = styled.div`
  display: grid;
  width: 90%;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  margin: 0 auto;
  justify-content: space-between;

  @media (max-width: 1024px) {
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

  @media (max-width: 1024px) {
    display: none;
  }
`

const EmailWrapper = styled.div`
  display: grid;
  justify-items: right;
  align-items: center;
  text-align: center;

  @media (max-width: 1024px) {
    display: none;
  }
`

const HamburgerWrapper = styled.div`
  display: none;

  @media (max-width: 1024px) {
    display: inline-block;
  }
`

const MobileMenuWrapper = styled.div`
  position: relative;
  visibility: hidden;

  @media (max-width: 1024px) {
    visibility: visible;
  }
`

const MobileMenu = styled.div`
  display: none;

  @media (max-width: 1024px) {
    display: grid;
    border-bottom: ${props =>
      props.isOpen ? `${props.theme.border};` : "none"};
    width: 100%;
    z-index: 8;
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
    gap: 10px;
    max-height: ${props => (props.isOpen ? "220px" : "0")};
    transition: max-height ${props => (props.isOpen ? "0.5s" : "0.3s")}
      ease-in-out;

    background-color: ${props => props.theme.backgroundColor};
  }
`
