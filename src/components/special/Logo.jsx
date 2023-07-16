import React from "react"
import styled from "styled-components"
import { H2 } from "../../styles/TextStyles"

const Logo = () => {
  return (
    <Wrapper aria-label="elliot hannah logo">
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

  @media (max-width: 1024px) {
    :hover {
      transform: none;
    }
  }
`

const Monogram = styled(H2)`
  background: ${props =>
    `linear-gradient(180deg, ${props.theme.secondaryColor} 0%, ${props.theme.primaryColor} 100%)`};
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`

const Superscript = styled.span`
  font-size: 20px;
  vertical-align: super;
`
