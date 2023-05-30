import React from "react"
import styled from "styled-components"
import {
  UilGithub,
  UilLinkedin,
  UilInstagram,
  UilFacebook,
} from "@iconscout/react-unicons"

const SocialMediaBanner = () => {
  const size = 30
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
        href="https://instagram.com/in/thatsehannah"
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
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  justify-items: left;
  align-items: center;
  justify-content: space-between;

  a {
    color: #0093e9;
    transition: 0.5s ease-out;
  }

  a:hover {
    transform: scale(1.2);
  }
`
