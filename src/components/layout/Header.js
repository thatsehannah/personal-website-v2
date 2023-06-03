import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import MenuButton from "../buttons/MenuButton"
import { UilEnvelope } from "@iconscout/react-unicons"
import Logo from "../special/Logo"
import HamburgerButton from "../buttons/HamburgerButton"
import { menuOptions } from "../../data/menuOptions"

const Header = () => {
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
        <HamburgerWrapper>
          <HamburgerButton />
        </HamburgerWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.div`
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
