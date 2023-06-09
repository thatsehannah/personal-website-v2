import React from "react"
import styled from "styled-components"
import { BodyMain, H2, H3 } from "../../../styles/TextStyles"
import Letter from "../../../components/special/Letter"
import { useAboutMeData } from "../../../utils/hooks/useAboutMeData"
import { useStats } from "../../../utils/hooks/useStats"

const Story = () => {
  const storyData = useAboutMeData().find(
    edge => edge.node.for === "storySection"
  )

  const text = storyData
    ? storyData.node.text
    : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus vivamus risus posuere vitae vivamus. Enim dui nibh magna hac id lacus euismod mi diam."

  let sentences = text.match(/[^.!?]+[.!?]+/g)
  let paragraphs = []
  for (let i = 0; i < sentences.length; i += 5) {
    let paragraph = sentences.slice(i, i + 5).join(" ")
    paragraphs.push(paragraph)
  }

  const statsData = useStats()

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

              <StatsWrapper>
                <H3>Stats</H3>
                <DataWrapper>
                  {statsData.map(({ node }) => (
                    <StatContentWrapper key={node.order}>
                      <EmojiWrapper>{node.emoji}</EmojiWrapper>
                      <StatContent>
                        <Text length={node.value.length}>
                          {node.key} <Strong>{node.value}</Strong>
                        </Text>
                      </StatContent>
                    </StatContentWrapper>
                  ))}
                </DataWrapper>
              </StatsWrapper>
            </BodyWrapper>
          </TextWrapper>
        </LeftSide>
        <RightSide>
          <MemojiWrapper>
            <Memoji src="/images/memojis/story-1.png" />
          </MemojiWrapper>
          <MemojiWrapper>
            <SpeciamMemoji src="/images/memojis/story-2.png" />
          </MemojiWrapper>
          <MemojiWrapper>
            <Memoji src="/images/memojis/wink-memoji.png" />
          </MemojiWrapper>
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
  width: 1300px;
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
`

const BodyWrapper = styled.div`
  display: grid;
  gap: 30px;
`

const StatsWrapper = styled.div`
  display: grid;
  gap: 24px;
  border: 0.5px solid black;
  border-radius: 25px;
  padding: 20px;
`

const DataWrapper = styled.div`
  display: grid;
  gap: 7px;
`

const StatContentWrapper = styled.div`
  display: flex;
  gap: 8px;
`

const StatContent = styled.div`
  display: grid;
  text-align: left;
  align-items: center;
`

const EmojiWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  font-size: 1.4rem;
`

const Text = styled(BodyMain)`
  ${props =>
    props.length > 100 &&
    `
      text-indent: -94px;
      padding-left: 94px;

      @media (max-width: 768px) {
        text-indent: -83px;
        padding-left: 83px;
      }
    `};
`

const Strong = styled.strong`
  font-weight: 600;
`

const RightSide = styled.div`
  display: grid;
  gap: 10px;
`

const MemojiWrapper = styled.div`
  display: grid;
  justify-content: center;
  overflow: hidden;
`

const Memoji = styled.img`
  height: 500px;
  position: relative;

  @media (max-width: 768px) {
    height: 350px;
  }
`

const SpeciamMemoji = styled(Memoji)`
  top: -45px;
`
