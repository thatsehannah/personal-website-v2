import React, { useRef } from "react"
import styled from "styled-components"
import { Caption, H2 } from "../../../styles/TextStyles"
import { useStrength } from "../../../utils/hooks/useStrengths"
import StrengthCard from "../../../components/cards/StrengthCard"
import {
  UilAngleRightB as RightAngle,
  UilAngleLeftB as LeftAngle,
} from "@iconscout/react-unicons"
import Letter from "../../../components/special/Letter"
import { fadeInAnimation } from "../../../styles/FadeInAnimation"
import { useIntersection } from "../../../utils/hooks/useIntersection"

const Strengths = () => {
  const ref = useRef(null)
  const inView = useIntersection(ref)
  const strengthData = useStrength()
  const carouselRef = useRef(null)

  let factor

  if (typeof window !== "undefined") {
    factor = window.innerWidth <= 768 ? 0.9 : 1.5
  }

  const handleScrollLeft = () => {
    const wrapper = carouselRef.current
    const scrollAmount = wrapper.clientWidth / factor
    wrapper.scrollLeft -= scrollAmount
  }

  const handleScrollRight = () => {
    const wrapper = carouselRef.current
    const scrollAmount = wrapper.clientWidth / factor
    wrapper.scrollLeft += scrollAmount
  }

  return (
    <Wrapper>
      <ContentWrapper ref={ref} inView={inView}>
        <TopWrapper>
          <TitleWrapper>
            <Title>
              My Top 5 Str
              <Letter />
              ngths 💪🏾
            </Title>
            <p>Scroll left or right, or use the arrow buttons!</p>
          </TitleWrapper>
          <ButtonGroup>
            <Button onClick={handleScrollLeft}>
              {<LeftAngle size={30} />}
            </Button>
            <Button onClick={handleScrollRight}>
              {<RightAngle size={30} />}
            </Button>
          </ButtonGroup>
        </TopWrapper>
        <Carousel ref={carouselRef}>
          <ListWrapper>
            {strengthData.map(({ node }) => (
              <StrengthCard
                key={node.rank}
                rank={node.rank}
                image={node.image}
                title={node.title}
                description={node.description}
              />
            ))}
          </ListWrapper>
        </Carousel>
        <Source>
          Source:{" "}
          <a
            href="https://test.high5test.com/test/02772b0e-2a15-4632-8c6a-47bf94180f1e"
            target="_blank"
            rel="noopener noreferrer"
          >
            HIGH 5 TEST
          </a>
        </Source>
      </ContentWrapper>
    </Wrapper>
  )
}

export default Strengths

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 20px;
`

const ContentWrapper = styled.div`
  display: grid;
  width: 1400px;
  margin: 0 auto;
  gap: 35px;
  opacity: 0;
  transition: opacity 1s ease-in;
  ${props => props.inView && fadeInAnimation};

  @media (max-width: 768px) {
    width: 100%;
    grid-template-columns: auto;
  }
`

const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: end;
    gap: 20px;
  }
`

const TitleWrapper = styled.div`
  display: grid;
  gap: 20px;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`

const Title = styled(H2)`
  text-align: center;
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`

const Button = styled.div`
  background-color: ${props => props.theme.mediumPrimaryColor};
  width: 75px;
  padding: 24px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;
  display: grid;
  justify-content: center;
  align-items: center;
  transition: transform 0.4s;
  border: ${props => props.theme.border};

  :hover {
    transform: scale(1.18);
    background-color: ${props => props.theme.mediumSecondaryColor};
  }

  :active {
    transform: scale(0.8);
  }

  @media (max-width: 768px) {
    width: 50px;
    padding: 12px;

    :hover {
      transform: none;
      background-color: ${props => props.theme.mediumPrimaryColor};
    }
  }
`

const Carousel = styled.div`
  position: sticky;
  width: 100%;
  overflow-x: scroll;
  left: 0;
  scroll-behavior: smooth;
  scrollbar-width: none; //for firefox
  &::-webkit-scrollbar {
    display: none;
  }
  transition: scroll-left 0.3s ease-in-out;
`

const ListWrapper = styled.div`
  display: grid;
  gap: 60px;
  grid-template-columns: repeat(5, auto);
  height: 100%;

  > :nth-child(even) {
    background-color: ${props => props.theme.lightSecondaryColor};
  }

  > :nth-child(odd) {
    background-color: ${props => props.theme.lightPrimaryColor};
  }

  @media (max-width: 768px) {
    align-items: center;
    /* gap: 40px; */
    padding: 10px;
  }
`

const Source = styled(Caption)`
  text-align: right;
`
