import React, { useState } from "react"
import styled from "styled-components"
import { H3, MediumText } from "../../styles/TextStyles"

const WebpageWrapper = props => {
  const [scrolling, setScrolling] = useState(false)
  const { imageUrl, name, description, platform, domain, code } = props.data

  return (
    <Wrapper>
      <ImageWrapper
        onMouseEnter={() => setScrolling(true)}
        onMouseLeave={() => setScrolling(false)}
      >
        <Image src={imageUrl} scrolling={scrolling} />
      </ImageWrapper>
      <TextWrapper>
        <TopWrapper>
          <H3>{name}</H3>
          <MediumText>{description}</MediumText>
        </TopWrapper>
        <BottomWrapper>
          <SmallCard>{platform}</SmallCard>
          <SmallCard>{domain}</SmallCard>
        </BottomWrapper>
      </TextWrapper>
    </Wrapper>
  )
}

export default WebpageWrapper

const Wrapper = styled.div`
  display: grid;
  gap: 50px;
  grid-template-columns: 2fr 1fr;
`

const ImageWrapper = styled.div`
  width: 100%;
  height: 600px;
  overflow: hidden;
  border: 0.5px solid black;
  border-radius: 20px;
`

const Image = styled.img`
  width: 100%;
  transition: transform ${props => (props.scrolling ? "15" : "3")}s ease-in-out;

  ${props =>
    props.scrolling &&
    `
    transform: translateY(calc(-100% + 300px));
  `}
`

const TextWrapper = styled.div`
  display: grid;
  justify-content: space-between;
`

const TopWrapper = styled.div``

const BottomWrapper = styled.div``

const SmallCard = styled.div``
