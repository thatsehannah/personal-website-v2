import React, { useRef, useState } from "react"
import styled from "styled-components"
import { useIntersection } from "../../utils/hooks/useIntersection"
import { H3 } from "../../styles/TextStyles"

const WebpageWrapper = props => {
  const [scrolling, setScrolling] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const ref = useRef(null)
  const inView = useIntersection(ref, { threshold: 0.5 })

  let overlayText = ""
  if (typeof window !== undefined) {
    overlayText = window.innerWidth <= 768 ? "Tap me!" : "Hover over me!"
  }

  return (
    <>
      <BrowserWrapper ref={ref} onMouseEnter={() => setIsHovered(true)}>
        <Overlay inView={inView && !isHovered}>
          <H3>{overlayText}</H3>
        </Overlay>
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
  border: ${props => props.theme.border};
  border-radius: 20px;
  overflow: hidden;
  position: relative;

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
  background-color: ${props => props.theme.webpageToolbarColor};

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
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.8s ease-in-out;
  opacity: ${props => (props.inView ? 1 : 0)};
  pointer-events: ${props => (props.inView ? "auto" : "none")};
`
