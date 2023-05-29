import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import MenuButton from "../buttons/MenuButton"
import { UilEnvelope } from "@iconscout/react-unicons"
import Logo from "../logo/Logo"

const Header = () => {
  const menuOptions = [
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Portfolio",
      link: "/portfolio",
    },
    {
      title: "Contact",
      link: "/contact",
    },
  ]

  return (
    <Wrapper id="header">
      <ContentWrapper id="contentwrapper">
        <LogoWrapper id="logowrapper">
          <Link to="/">
            <Logo />
          </Link>
        </LogoWrapper>
        <MenuWrapper count={menuOptions.length}>
          {menuOptions.map((item, i) => (
            <MenuButton title={item.title} link={item.link} />
          ))}
        </MenuWrapper>
        <Email id="lilemail">
          <Title href="mailto:elliotchannah@outlook.com">
            <span>
              <UilEnvelope color="#0093e9" size="20" />
            </span>{" "}
            elliotchannah@outlook.com
          </Title>
        </Email>
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
    padding: 0;
  }

  a {
    text-decoration: none;
    color: #0093e9;
  }
`

const ContentWrapper = styled.div`
  display: grid;
  width: 1300px;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-content: space-between;
`

const LogoWrapper = styled.div`
  padding-left: 20px;
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
`

const Email = styled.div`
  display: grid;
  justify-items: right;
  align-items: center;

  text-align: center;
`
const Title = styled.a`
  font-weight: normal;
  font-size: 1rem;
  text-align: center;
  padding: 10px;
  transition: 0.5s ease-out;
  border-radius: 10px;

  span {
    display: inline-block;
    vertical-align: middle;
    margin-right: 5px;
  }

  :hover {
    background: rgba(0, 0, 0, 0.1);
    transform: scale(1.2);
  }
`
