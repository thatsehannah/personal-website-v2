import React, { useRef } from "react"
import styled from "styled-components"
import { fadeInAnimation } from "../../styles/FadeInAnimation"
import { useIntersection } from "../../utils/hooks/useIntersection"

const MemojiWrapper = props => {
  const ref = useRef(null)
  const inView = useIntersection(ref, { threshold: props.threshold })

  return (
    <Wrapper ref={ref} inView={inView}>
      <Memoji src={props.memoji.src} styles={props.memoji.styles} />
    </Wrapper>
  )
}

export default MemojiWrapper

const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  overflow: hidden;
  opacity: 0;
  transition: opacity 1s ease-in;
  ${props => props.inView && fadeInAnimation}

  @media (max-width: 768px) {
    display: none;
  }
`

const Memoji = styled.img`
  height: 450px;
  position: relative;

  @media (max-width: 768px) {
    height: 350px;
  }

  ${props =>
    props.styles &&
    props.styles.map(([property, value]) => `${property}: ${value};`).join("")}
`
