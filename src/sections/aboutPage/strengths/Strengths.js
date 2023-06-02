import React from "react"
import styled from "styled-components"
import { H3 } from "../../../styles/TextStyles"
import { useStrength } from "../../../utils/hooks/useStrengths"
import StrengthCard from "../../../components/cards/StrengthCard"

const Strengths = () => {
  const strengthData = useStrength()

  return (
    <Wrapper>
      <ContentWrapper>
        <Title>My Top 5 Strengths</Title>
        <StrengthsWrapper>
          {strengthData.map(({ node }) => (
            <StrengthCard
              rank={node.rank}
              image={node.image}
              title={node.title}
              description={node.description}
            />
          ))}
        </StrengthsWrapper>
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
  gap: 40px;

  @media (max-width: 768px) {
    width: 100%;
    grid-template-columns: auto;
  }
`

const Title = styled(H3)`
  text-align: center;
`

const StrengthsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 20px;
  width: 100%;
  justify-content: space-between;
`
