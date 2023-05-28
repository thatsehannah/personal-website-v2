import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import MenuButton from "../buttons/MenuButton"
import { UilEnvelope } from "@iconscout/react-unicons"
import Logo from "../logo/Logo"

const Header = () => {
  return (
    <Wrapper id="header">
      <ContentWrapper id="contentwrapper">
        <LogoWrapper id="logowrapper">
          <Link to="/">
            <Logo />
          </Link>
        </LogoWrapper>
        <MenuWrapper id="menuwrapper">
          <MenuButton title="About" link="/about" />
          <MenuButton title="Portfolio" link="/portfolio" />
          <MenuButton title="Contact" link="/contact" />
        </MenuWrapper>
        <EmailWrapper id="emailwrapper">
          <Email id="lilemail">
            <UilEnvelope color="#0093e9" />
            <Title href="mailto:elliotchannah@outlook.com">
              elliotchannah@outlook.com
            </Title>
          </Email>
        </EmailWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.div`
  position: absolute;
  top: 30px;
  margin: 0 auto;
  display: grid;
  width: 100%;
  padding: 0 30px;
  justify-items: center;
  align-items: center;
  z-index: 1;

  @media (max-width: 768px) {
    top: 30px;
  }
  @media (max-width: 450px) {
    top: 20px;
    padding: 0 20px;
  }

  a {
    text-decoration: none;
    color: #0093e9;
  }
`

const ContentWrapper = styled.div`
  width: 1300px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
`

const LogoWrapper = styled.div`
  padding-left: 20px;
  display: grid;
  justify-items: left;
`

const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 14px;
  justify-items: center;
`

const EmailWrapper = styled.div`
  display: grid;
  justify-content: right;
`

const Email = styled.div`
  margin-right: 20px;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: auto auto;
  gap: 12px;

  padding: 10px;
  text-align: center;
  transition: 0.5s ease-out;
  border-radius: 10px;

  :hover {
    background: rgba(0, 0, 0, 0.1);
    transform: scale(1.2);
  }
`
const Title = styled.a`
  font-weight: normal;
  font-size: 1.1rem;
  line-height: 130%;
`
