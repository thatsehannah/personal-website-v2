import styled from "styled-components"

export const H1 = styled.h1`
  font-weight: bold;
  font-size: 3.75rem;

  @media (max-width: 450px) {
    font-size: 34px;
  }
`

export const H2 = styled.h2`
  font-weight: bold;
  font-size: 2.5rem;

  @media (max-width: 450px) {
    font-size: 28px;
  }
`

export const H3 = styled.h3`
  font-weight: bold;
  font-size: 1.9rem;

  @media (max-width: 450px) {
    font-size: 24px;
  }
`

export const BodyIntro = styled.p`
  font-weight: 500;
  font-size: 1.9rem;
  line-height: 140%;
`

export const BodyMain = styled.p`
  font-weight: normal;
  font-size: 1.25rem;
  line-height: 140%;
`

export const MediumText = styled.p`
  font-weight: normal;
  font-size: 1.1rem;
  line-height: 130%;
`

export const Caption = styled.p`
  font-weight: 500;
  font-size: 0.9rem;
  line-height: 1.1rem;
`

export const Caption2 = styled.p`
  font-weight: 600;
  font-size: 0.9rem;
  line-height: 1.1rem;
  text-transform: uppercase;
`

export const SmallText = styled.p`
  font-weight: normal;
  font-size: 0.8rem;
  line-height: 130%;
`

export const SmallText2 = styled.p`
  font-weight: 600;
  font-size: 0.8rem;
  line-height: 130%;
  text-transform: uppercase;
`
