import React, { useState } from "react"
import styled from "styled-components"

const WebpageWrapper = props => {
  const [scrolling, setScrolling] = useState(false)

  return (
    <>
      <BrowserWrapper>
        <Toolbar>
          <ToolbarButton color="#f65f58" />
          <ToolbarButton color="#f9bc23" />
          <ToolbarButton color="#3cc83f" />
        </Toolbar>
        <ImageWrapper
          onMouseEnter={() => setScrolling(true)}
          onMouseLeave={() => setScrolling(false)}
        >
          <Image src={props.image} scrolling={scrolling} />
        </ImageWrapper>
      </BrowserWrapper>
    </>
  )
}

export default WebpageWrapper

const BrowserWrapper = styled.div`
  border: 0.5px solid black;
  border-radius: 20px;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 450px;
    width: 100%;
  }
`

const ImageWrapper = styled.div`
  width: 100%;
  height: 630px;
  overflow: hidden;
`

const Toolbar = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 34px;
  padding-left: 20px;
  background-color: lightgray;

  @media (max-width: 768px) {
    height: 25px;
  }
`

const ToolbarButton = styled.div`
  height: 14px;
  width: 14px;
  border-radius: 50%;
  border: 0.5px solid rgba(0, 0, 0, 0.2);
  background-color: ${props => props.color};

  @media (max-width: 768px) {
    height: 12px;
    width: 12px;
  }
`

const Image = styled.img`
  width: 100%;
  transition: transform ${props => (props.scrolling ? "15" : "3")}s ease-in-out;

  ${props =>
    props.scrolling &&
    `
    transform: translateY(calc(-100% + 300px));
  `}

  @media (max-width: 768px) {
    transition: none;
    transform: none;
  }
`
