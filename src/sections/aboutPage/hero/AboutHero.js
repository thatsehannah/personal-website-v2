import React from "react"
import styled from "styled-components"
import { H1, BodyMain } from "../../../styles/TextStyles"

const AboutHero = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <LeftSide>
          <Memoji src="/images/memojis/about-me.png" />
        </LeftSide>
        <RightSide>
          <TextWrapper>
            <H1>
              The name's Elliot Hannah III, but you can call me{" "}
              <SpecialLetter>E</SpecialLetter>
            </H1>
            <BodyMain>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus
              mattis nunc aliquam tincidunt est non. Viverra nec eu, in
              ridiculus egestas mi. Vulputate tristique porttitor enim aliquam
              ullamcorper. Velit dui laoreet in et mus.
            </BodyMain>
          </TextWrapper>
        </RightSide>
      </ContentWrapper>
    </Wrapper>
  )
}

export default AboutHero

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 20px;
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  width: 1300px;
  margin: 0 auto;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%;
    grid-template-columns: auto;
  }
`

const LeftSide = styled.div`
  display: grid;
  justify-content: center;
`

const RightSide = styled.div`
  display: flex;
  width: 550px;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`

const Memoji = styled.img`
  height: 500px;
  position: relative;
  top: -55px;

  @media (max-width: 768px) {
    height: 350px;
    top: -60px;
  }
`

const TextWrapper = styled.div`
  display: grid;
  gap: 20px;
`

const SpecialLetter = styled.span`
  vertical-align: middle;
  font-size: 5.6rem;
  background: linear-gradient(180deg, #0093e9 0%, #80d0c7 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`
