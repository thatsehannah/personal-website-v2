import React from "react"
import styled from "styled-components"
import { H1, MediumText } from "../../styles/TextStyles"
import MainButton from "../../components/buttons/MainButton"
import AnimatedRoles from "../../components/animations/AnimatedRoles"
import { UilArrowDown } from "@iconscout/react-unicons"

const Hero = props => {
  return (
    <Wrapper>
      <Background />
      <ContentWrapper>
        <TextWrapper>
          <Title>Elliot C. Hannah III</Title>
          <AnimatedRoles />
          <MainButton title="Download my resume" icon={<UilArrowDown />} />
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default Hero

const Wrapper = styled.div`
  position: relative;
`

const Background = styled.img`
  position: absolute;
  width: 100%;
  height: 1000px;
  background-color: #0093e9;
  background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);

  z-index: -1;
`

const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding: 300px 30px;
  display: grid;
  grid-template-columns: 550px auto;

  @media (max-width: 450px) {
    grid-template-columns: auto;
    gap: 60px;
    padding: 150px 20;
  }
`

const TextWrapper = styled.div`
  max-width: 550px;
  display: grid;
  gap: 50px;
`

const Title = styled(H1)``
