import React from "react"
import styled from "styled-components"
import Logo from "../logo/Logo"
import { Link } from "gatsby"
import { BodyMain } from "../../styles/TextStyles"
import SocialMediaBanner from "../socials/SocialMediaBanner"

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
          <SocialMediaBanner />
        </Main>
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
  grid-template-columns: repeat(4, 1fr);
  width: 1300px;
  height: 400px;
`

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 20px;
  gap: 20px;
`

const LogoWrapper = styled.div`
  display: grid;
  justify-items: left;
`

const Text = styled(BodyMain)``
