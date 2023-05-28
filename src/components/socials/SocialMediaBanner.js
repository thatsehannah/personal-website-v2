import React from "react"
import styled from "styled-components"
import {
  UilGithub,
  UilLinkedin,
  UilInstagram,
  UilFacebook,
} from "@iconscout/react-unicons"
import { Link } from "gatsby"

const SocialMediaBanner = () => {
  const size = 40
  return (
    <Wrapper id="blah">
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
  grid-template-columns: repeat(4, auto);
  gap: 40px;
  justify-items: center;
  align-items: center;
  justify-content: space-between;

  a {
    color: #80d0c7;
    transition: 0.5s ease-out;
  }

  a:hover {
    color: #0093e9;
    transform: scale(1.2);
  }
`
