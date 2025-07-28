import React from "react"
import styled, { useTheme } from "styled-components"
import Logo from "../special/Logo"
import { Link } from "gatsby"
import { Caption, H3, SmallText } from "../../styles/TextStyles"
import SocialMediaBanner from "../socials/SocialMediaBanner"
import { menuOptions } from "../../data/menuOptions"
import MenuButton from "../buttons/MenuButton"
import { UilEnvelope } from "@iconscout/react-unicons"

const Footer = () => {
  const theme = useTheme()

  return (
    <Wrapper>
      <ContentWrapper>
        <Column>
          <LogoWrapper>
            <Link to="/">
              <Logo />
            </Link>
          </LogoWrapper>
          <Text>
            "Success to me is just being able to do what you love to do and
            support yourself all through."
            <br />
            -Nipsey Hussle
          </Text>
          <SocialMediaBanner size={30} />
        </Column>
        <AllLinksWrapper>
          <PagesWrapper>
            <Title>Pages</Title>
            <MenuWrapper count={menuOptions.length}>
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
            </LinksWrapper>
            <CopyrightInfo>
              <CopyrightText>
                Site made with React, Gatsby, Google Firebase, and Vercel.
              </CopyrightText>
              <CopyrightText>
                &copy; Copyright {new Date().getFullYear()}, TECH3
              </CopyrightText>
            </CopyrightInfo>
          </ContactWrapper>
        </AllLinksWrapper>
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
  padding: 20px;
  border-top: 1px solid ${props => props.theme.ruleColor};
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  justify-content: space-between;
  width: 90%;

  @media (max-width: 1024px) {
    width: 100%;
    grid-template-columns: 1fr;
    gap: 50px;
  }

  @media (max-width: 768px) {
    gap: 40px;
  }
`

const Column = styled.div`
  display: grid;
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: auto;
  }
`

const LogoWrapper = styled.div`
  display: grid;
  justify-items: left;
`

const Text = styled(Caption)`
  color: ${props => props.theme.secondaryTextColor};
`

const CopyrightText = styled(SmallText)`
  color: ${props => props.theme.secondaryTextColor};
`

const AllLinksWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: auto auto;
  justify-content: space-between;

  @media (max-width: 1024px) {
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
  }

  @media (max-width: 768px) {
    grid-template-columns: auto;
    gap: 40px;
  }
`

const PagesWrapper = styled(Column)`
  display: grid;
  grid-template-rows: 20px auto;
  margin-left: 120px;

  @media (max-width: 1024px) {
    margin-left: 0;
  }

  @media (max-width: 768px) {
    grid-template-rows: 30px auto;
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

  @media (max-width: 1024px) {
    grid-template-columns: auto;
    gap: 30px;
    grid-auto-flow: column;
    grid-template-rows: auto;
  }
`

const ContactWrapper = styled(Column)`
  display: grid;
  grid-template-rows: 20px auto;

  @media (max-width: 768px) {
    grid-template-rows: 30px auto;
    gap: 6px;
  }
`

const LinksWrapper = styled.div`
  display: grid;
  align-items: start;
  justify-items: start;
  gap: 10px;

  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`

const CopyrightInfo = styled.div`
  display: grid;
`
