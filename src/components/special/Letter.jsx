import React from "react"
import styled from "styled-components"

const Letter = () => {
  return <Span>E</Span>
}

export default Letter

const Span = styled.span`
  vertical-align: baseline;
  background: ${props =>
    `linear-gradient(180deg, ${props.theme.secondaryColor} 0%, ${props.theme.primaryColor} 100%)`};
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`
