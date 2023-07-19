import React from "react"
import styled from "styled-components"
import {
  UilGithub,
  UilLinkedin,
  UilInstagram,
  UilTwitter,
  UilFacebook,
} from "@iconscout/react-unicons"

const SocialMediaBanner = props => {
  const { size } = props

  return (
    <Wrapper>
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
        href="https://twitter.com/thatsehannah"
        target="_blank"
        rel="noopener noreferrer"
      >
        <UilTwitter size={size} />
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
    color: ${props => props.theme.secondaryColor};
    transition: 0.5s ease-out;
    margin-right: 24px;
  }

  a:hover {
    transform: scale(1.2);
    color: ${props => props.theme.primaryColor};
  }
`
