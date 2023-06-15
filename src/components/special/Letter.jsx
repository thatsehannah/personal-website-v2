import React from "react"
import styled from "styled-components"

const Letter = () => {
  return <Span>E</Span>
}

export default Letter

const Span = styled.span`
  vertical-align: baseline;
  background: linear-gradient(180deg, #0093e9 0%, #80d0c7 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`
