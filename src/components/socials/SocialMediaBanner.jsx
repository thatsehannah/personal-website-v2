import React from "react"
import styled from "styled-components"
import {
  UilGithub,
  UilLinkedin,
  UilInstagram,
  UilFacebook,
} from "@iconscout/react-unicons"

const SocialMediaBanner = props => {
  const { size } = props

  return (
    <Wrapper color1={props.color1} color2={props.color2}>
      <a
        href="https://github.com/thatsehannah"
        target="_blank"
        rel="noopener noreferrer"
      >
        <UilGithub size={size} />
      </a>
      <a
        href="https://linkedin.com/in/elliotchannah"
        target="_blank"
        rel="noopener noreferrer"
      >
        <UilLinkedin size={size} />
      </a>
      <a
        href="https://instagram.com/thatsehannah"
        target="_blank"
        rel="noopener noreferrer"
      >
        <UilInstagram size={size} />
      </a>
      <a
        href="https://www.facebook.com/ehannahiii/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <UilFacebook size={size} />
      </a>
    </Wrapper>
  )
}

export default SocialMediaBanner

const Wrapper = styled.div`
  display: flex;
  justify-items: left;
  align-items: center;

  a {
    color: ${props => props.color1};
    ${props =>
      props.color1 &&
      props.color2 &&
      `
      background: linear-gradient(180deg, ${props.color1} 0%, ${props.color2} 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

    `}
    transition: 0.5s ease-out;
    margin-right: 24px;
  }

  a:hover {
    transform: scale(1.2);
  }
`
