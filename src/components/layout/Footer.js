import React from "react"
import styled from "styled-components"
import Logo from "../logo/Logo"
import { Link } from "gatsby"
import { BodyMain, H3 } from "../../styles/TextStyles"
import SocialMediaBanner from "../socials/SocialMediaBanner"
import { menuOptions } from "../../data/menuOptions"
import MenuButton from "../buttons/MenuButton"
import { UilEnvelope, UilMobileVibrate } from "@iconscout/react-unicons"

const Footer = () => {
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus
            mattis nunc aliquam tincidunt est non.
          </Text>
          <SocialMediaBanner color="rgb(0,0,0)" />
        </Main>
        <PagesWrapper>
          <Title>PAGES</Title>
          <MenuWrapper count={menuOptions.length} id="menuwrapper">
            {menuOptions.map((item, i) => (
              <MenuButton
                key={i}
                title={item.title}
                link={item.link}
                color="rgba(0,0,0,0.5)"
                hoverColor="rgb(0,0,0)"
              />
            ))}
          </MenuWrapper>
        </PagesWrapper>
        <ContactWrapper>
          <Title>CONTACT ME</Title>
          <AnchorWrapper id="anchorwrapper">
            <MenuButton
              title="elliotchannah@outlook.com"
              link="mailto:elliotchannah@outlook.com"
              icon={<UilEnvelope color="rgba(0,0,0,0.5)" size="20" />}
              color="rgba(0,0,0,0.5)"
              hoverColor="rgb(0,0,0)"
            />
            <MenuButton
              title="(706) 631 - 7005"
              link="tel:(706)631-7005"
              icon={<UilMobileVibrate color="rgba(0,0,0,0.5)" size="20" />}
              color="rgba(0,0,0,0.5)"
              hoverColor="rgb(0,0,0)"
            />
          </AnchorWrapper>
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
  padding: 0 30px;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 350px);
  justify-content: space-between;
  width: 1300px;
  padding: 100px 0;

  @media (max-width: 768px) {
    padding: 50px 0;
    width: 100%;
    grid-template-columns: auto;
    gap: 60px;
  }
`

const Column = styled.div`
  display: grid;
  padding-left: 20px;
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
  color: rgba(0, 0, 0, 0.5);
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

const AnchorWrapper = styled.div`
  display: grid;
  align-items: start;
  justify-items: start;
  align-content: start;
  gap: 20px;
`

const Anchor = styled.a`
  display: inline-block;
  font-weight: normal;
  color: rgba(0, 0, 0, 0.5);
  font-size: 1rem;
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
