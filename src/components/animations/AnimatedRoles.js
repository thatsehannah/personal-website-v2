import React, { useEffect, useState } from "react"
import styled, { keyframes, css } from "styled-components"
import { H1, H2 } from "../../styles/TextStyles"

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
  @media (max-width: 450px) {
    width: 200px;
    text-align: left;
    line-height: 2;
  }
`

const AnimatedRoles = () => {
  const [fade, setFade] = useState("fade-in")
  const [wordOrder, setWordOrder] = useState(0)
  const roles = ["Full Stack", "Front End", "Mobile/iOS"]
  const fadeInterval = 1750
  const wordChangeInterval = fadeInterval * 2

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFade("fade-out")
      // Set another timeout to change the word after the fade-out transition has completed
      const timeoutId = setTimeout(() => {
        setFade("fade-in")
        setWordOrder(prevWordOrder => (prevWordOrder + 1) % roles.length)
      }, fadeInterval)
      // Return a cleanup function to clear the timeout if the interval is cleared
      return () => clearTimeout(timeoutId)
    }, wordChangeInterval)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <H1>
      I'm a <FadeInOut fade={fade}>{roles[wordOrder]}</FadeInOut> Developer
    </H1>
  )
}

export default AnimatedRoles
