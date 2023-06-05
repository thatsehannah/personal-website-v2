import React, { useRef } from "react"
import styled from "styled-components"
import { H2, H3 } from "../../../styles/TextStyles"
import { useStrength } from "../../../utils/hooks/useStrengths"
import StrengthCard from "../../../components/cards/StrengthCard"
import {
  UilAngleRightB as RightAngle,
  UilAngleLeftB as LeftAngle,
} from "@iconscout/react-unicons"
import Letter from "../../../components/special/Letter"

const Strengths = () => {
  const strengthData = useStrength()
  const stickyWrapperRef = useRef(null)

  const factor = window.innerWidth <= 768 ? 1.0575 : 1.5
  console.log(window.innerWidth)
  console.log(factor)

  const handleScrollLeft = () => {
    const wrapper = stickyWrapperRef.current
    const scrollAmount = wrapper.clientWidth / factor
    wrapper.scrollLeft -= scrollAmount
  }

  const handleScrollRight = () => {
    const wrapper = stickyWrapperRef.current
    const scrollAmount = wrapper.clientWidth / factor
    wrapper.scrollLeft += scrollAmount
  }

  return (
    <Wrapper>
      <ContentWrapper>
        <TopWrapper>
          <TitleWrapper>
            <Title>
              My Top 5 Str
              <Letter />
              ngths 💪🏾
            </Title>
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
        <StickyWrapper ref={stickyWrapperRef}>
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
        </StickyWrapper>
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
  width: 1300px;
  margin: 0 auto;
  gap: 35px;

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
  @media (max-width: 768px) {
    width: 100%;
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
  background-color: rgba(128, 208, 199, 0.4);
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

  :hover {
    transform: scale(1.18);
    background-color: rgba(0, 147, 233, 0.4);
  }

  :active {
    transform: scale(0.8);
  }
`

const StickyWrapper = styled.div`
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
    background-color: rgba(0, 147, 233, 0.2);
  }

  > :nth-child(odd) {
    background-color: rgba(128, 208, 199, 0.2);
  }

  @media (max-width: 768px) {
    gap: 40px;
    padding: 20px;
  }
`
