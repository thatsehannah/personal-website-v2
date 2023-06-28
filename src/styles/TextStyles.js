import styled from "styled-components"

export const H1 = styled.h1`
  font-weight: 800;
  font-size: 3.75rem;
  line-height: 1.25;

  @media (max-width: 1024px) {
    font-size: 3.5rem;
  }

  @media (max-width: 768px) {
    font-size: 2.7rem;
  }
`

export const H2 = styled.h2`
  font-weight: 700;
  font-size: 2.8rem;

  @media (max-width: 768px) {
    font-size: 1.9rem;
  }
`

export const H3 = styled.h3`
  font-weight: 600;
  font-size: 1.9rem;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`

export const BodyIntro = styled.p`
  /* font-weight: 500; */
  font-size: 1.75rem;
  line-height: 140%;
`

export const BodyMain = styled.p`
  font-weight: normal;
  font-size: 1.25rem;
  line-height: 1.5;

  @media (max-width: 1024px) {
    font-size: 1.1rem;
    line-height: 1.7;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

export const MediumText = styled.p`
  font-weight: normal;
  font-size: 1.1rem;
  line-height: 1.8;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

export const Caption = styled.p`
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.1rem;
`

export const Caption2 = styled.p`
  font-weight: 600;
  font-size: 1rem;
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
