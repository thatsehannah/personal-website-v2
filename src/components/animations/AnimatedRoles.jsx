import React, { useEffect, useState } from "react"
import styled, { keyframes, css } from "styled-components"
import { H1 } from "../../styles/TextStyles"

const AnimatedRoles = () => {
  const [fade, setFade] = useState("fade-in")
  const [wordOrder, setWordOrder] = useState(0)
  const roles = ["Full Stack", "Front End", "Mobile/iOS"]
  const fadeInterval = 1750
  const wordChangeInterval = fadeInterval * 2

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFade("fade-out")
      // Setting a timeout to change the word after the fade-out transition has completed
      const timeoutId = setTimeout(() => {
        setFade("fade-in")
        setWordOrder(prevWordOrder => (prevWordOrder + 1) % roles.length)
      }, fadeInterval)
      return () => clearTimeout(timeoutId)
    }, wordChangeInterval)

    return () => clearInterval(intervalId)
  }, [roles.length, wordChangeInterval])

  return (
    <H1>
      I'm a <FadeInOut fade={fade}>{roles[wordOrder]}</FadeInOut> Engineer
    </H1>
  )
}

export default AnimatedRoles

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`

const fadeOut = keyframes`
  0% { opacity: 1; }
  100% { opacity: 0; }
`

const FadeInOut = styled.span`
  display: inline-block;
  width: 300px;
  font-weight: 300;
  ${({ fade }) =>
    fade === "fade-in"
      ? css`
          animation: ${fadeIn} 1.75s;
        `
      : css`
          animation: ${fadeOut} 1.75s;
        `}

  @media (max-width: 768px) {
    width: 230px;
    text-align: left;
    line-height: 2;
  }
`
