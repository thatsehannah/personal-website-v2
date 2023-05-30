import React from "react"
import styled from "styled-components"
import { H2 } from "../../styles/TextStyles"

const Logo = () => {
  return (
    <Wrapper>
      <Monogram>
        EH<Superscript>3</Superscript>
      </Monogram>
    </Wrapper>
  )
}

export default Logo

const Wrapper = styled.div`
  display: grid;
  align-items: center;
  transition: 0.5s;

  :hover {
    transform: scale(1.2) translateY(-10px);
  }

  @media (max-width: 450px) {
    width: 50px;
    height: 50px;
    border-radius: 5px;
  }
`

const Monogram = styled(H2)`
  background: linear-gradient(180deg, #0093e9 0%, #80d0c7 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`

const Superscript = styled.span`
  font-size: 20px;
  vertical-align: super;
`
