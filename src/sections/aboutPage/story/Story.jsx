import React from "react"
import styled from "styled-components"
import { BodyMain, H2 } from "../../../styles/TextStyles"
import Letter from "../../../components/special/Letter"
import { useAboutMeData } from "../../../utils/hooks/useAboutMeData"
import Stats from "./Stats"
import { paragraphCreator } from "../../../utils/functions/paragraphCreator"
import Memojis from "./Memojis"

const Story = () => {
  const storyData = useAboutMeData().find(
    edge => edge.node.for === "storySection"
  )
  const text = storyData
    ? storyData.node.text
    : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus vivamus risus posuere vitae vivamus. Enim dui nibh magna hac id lacus euismod mi diam."

  const paragraphs = paragraphCreator(text, 5)

  return (
    <Wrapper id="story">
      <ContentWrapper>
        <LeftSide>
          <TextWrapper>
            <H2>
              A Little About M<Letter />
            </H2>
            <BodyWrapper>
              {paragraphs.map((paragraph, index) => (
                <BodyMain key={index}>{paragraph}</BodyMain>
              ))}
              <Stats />
            </BodyWrapper>
          </TextWrapper>
        </LeftSide>
        <RightSide>
          <Memojis />
        </RightSide>
      </ContentWrapper>
    </Wrapper>
  )
}

export default Story

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 20px;
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 2fr;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
    grid-template-columns: auto;
  }
`

const LeftSide = styled.div``

const TextWrapper = styled.div`
  display: grid;
  gap: 60px;

  @media (max-width: 768px) {
    gap: 30px;
  }
`

const BodyWrapper = styled.div`
  display: grid;
  gap: 30px;
`

const RightSide = styled.div`
  display: grid;
  gap: 10px;
`
