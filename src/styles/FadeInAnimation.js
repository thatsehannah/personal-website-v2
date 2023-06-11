import { css, keyframes } from "styled-components"

export const fadeInKeyFrame = keyframes`
  from {
    opacity: 0;
    transform: translateY(-40px);
    filter: blur(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
    filter: blur(0px);
  }
`

export const fadeInAnimation = css`
  animation: ${fadeInKeyFrame} 1s forwards;
`
