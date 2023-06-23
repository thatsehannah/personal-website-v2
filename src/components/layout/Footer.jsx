import React from "react"
import styled, { useTheme } from "styled-components"
import Logo from "../special/Logo"
import { Link } from "gatsby"
import { BodyMain, H3 } from "../../styles/TextStyles"
import SocialMediaBanner from "../socials/SocialMediaBanner"
import { menuOptions } from "../../data/menuOptions"
import MenuButton from "../buttons/MenuButton"
import { UilEnvelope, UilMobileVibrate } from "@iconscout/react-unicons"

const Footer = props => {
  const theme = useTheme()

  console.log("Theme:", theme)
  return (
    <Wrapper>
      <ContentWrapper>
        <Main>
          <LogoWrapper>
            <Link to="/">
              <Logo />
            </Link>
          </LogoWrapper>
          <Text>
            "Success is being able to do what you love to do and support
            yourself off of it."
            <br />
            -Nipsey Hussle
          </Text>
          <SocialMediaBanner size={30} color1="rgb(0,0,0)" />
        </Main>
        <PagesWrapper>
          <Title>Pages</Title>
          <MenuWrapper count={menuOptions.length} id="menuwrapper">
            {menuOptions.map((item, i) => (
              <Link to={item.link} key={i}>
                <MenuButton title={item.title} />
              </Link>
            ))}
          </MenuWrapper>
        </PagesWrapper>
        <ContactWrapper>
          <Title>Contact Me</Title>
          <LinksWrapper>
            <a href="mailto:elliotchannah@outlook.com">
              <MenuButton
                title="elliotchannah@outlook.com"
                icon={
                  <UilEnvelope color={theme.menuButton.textColor} size="20" />
                }
              />
            </a>
            <a href="tel:(706)631-7005">
              <MenuButton
                title="(706) 631 - 7005"
                icon={
                  <UilMobileVibrate
                    color={theme.menuButton.textColor}
                    size="20"
                  />
                }
              />
            </a>
          </LinksWrapper>
        </ContactWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default Footer

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  width: 100%;
  padding: 30px;
  border-top: 1px solid ${props => props.theme.ruleColor};
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 350px);
  justify-content: space-between;
  width: 1400px;
  /* padding: 100px 0; */

  @media (max-width: 768px) {
    padding: 50px 0;
    width: 100%;
    grid-template-columns: auto;
    gap: 60px;
  }
`

const Column = styled.div`
  display: grid;
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: auto;
  }
`

const Main = styled(Column)``

const LogoWrapper = styled.div`
  display: grid;
  justify-items: left;
`

const Text = styled(BodyMain)`
  color: ${props => props.theme.secondaryTextColor};
`

const PagesWrapper = styled(Column)`
  display: grid;
  grid-template-rows: 40px auto;

  @media (max-width: 768px) {
    gap: 6px;
  }
`

const Title = styled(H3)`
  font-size: 1.3rem;
`

const MenuWrapper = styled.div`
  display: grid;
  align-items: start;
  justify-items: start;
  grid-template-columns: 100px 100px;
  grid-template-rows: auto;
  align-content: start;
  gap: 20px;
`

const ContactWrapper = styled(Column)`
  display: grid;
  grid-template-rows: 40px auto;

  @media (max-width: 768px) {
    gap: 6px;
  }
`

const LinksWrapper = styled.div`
  display: grid;
  align-items: start;
  justify-items: start;
  align-content: start;
  gap: 20px;
`
