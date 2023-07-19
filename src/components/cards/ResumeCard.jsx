import React from "react"
import styled from "styled-components"
import { H3, Caption, BodyMain } from "../../styles/TextStyles"

const ResumeCard = props => {
  const {
    company,
    url,
    logo,
    title,
    start,
    end,
    overflow,
    isOdd,
    secondaryText,
  } = props

  const altText = `${company} logo`
  return (
    <Wrapper>
      <LogoWrapper>
        <a href={url} target="_blank" rel="noreferrer">
          <WorkLogo src={logo} alt={altText} />
        </a>
      </LogoWrapper>
      <EmphasisWrapper>
        <TitleWrapper>
          <Title>{title}</Title>
        </TitleWrapper>
        <Duration>
          {start} - {end}
        </Duration>
      </EmphasisWrapper>
      <SecondaryTextWrapper
        titleLength={title.length}
        overflow={overflow}
        isOdd={isOdd}
      >
        <SecondaryText>{secondaryText}</SecondaryText>
      </SecondaryTextWrapper>
    </Wrapper>
  )
}

export default ResumeCard

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 575px;
  height: 290px;
  gap: 16px;
  background-color: ${props => props.theme.resumeCard.backgroundColor};
  border-radius: 20px;
  border: ${props => props.theme.border};
  padding: 20px;

  @media (max-width: 1024px) {
    width: 90%;
    padding: 20px 15px;
    margin: 0 auto;
    height: auto;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`

const LogoWrapper = styled.div`
  width: 300px;
`

const WorkLogo = styled.img`
  max-width: 100%;
  height: 70px;
  object-fit: contain;
`

const EmphasisWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;

  @media (max-width: 450px) {
    grid-template-columns: auto;
    gap: 10px;
  }
`

const TitleWrapper = styled.div`
  width: 320px;
`

const Title = styled(H3)`
  font-size: 1.6rem;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`

const Duration = styled(Caption)`
  color: ${props => props.theme.resumeCard.secondaryTextColor};
`
//for future reference: https://css-tricks.com/line-clampin/
const SecondaryTextWrapper = styled.div`
  overflow: ${props => props.overflow && `hidden`};
  display: -webkit-box;
  -webkit-line-clamp: ${props => (props.titleLength >= 25 ? 3 : 4)};
  -webkit-box-orient: vertical;
  transition: 0.2s ease-out;

  &:hover {
    display: grid;
    overflow: visible;
    height: auto;
    padding: 10px;
    transform: scale(1.2)
      ${props =>
        props.isOdd ? "translate(-50px, -10px)" : "translate(50px, -10px)"};
    cursor: pointer;
    background-color: ${props => props.theme.resumeCard.hoverBackgroundColor};
    border-radius: 10px;
    box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 1024px) {
    pointer-events: none;
    transform: none;
    display: -webkit-box;
    -webkit-line-clamp: initial;
    -webkit-box-orient: initial;
  }
`

const SecondaryText = styled(BodyMain)`
  line-height: 1.4;
  color: ${props => props.theme.resumeCard.secondaryTextColor};

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`
