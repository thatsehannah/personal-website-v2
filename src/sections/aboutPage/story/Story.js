import React from "react"
import styled from "styled-components"
import { BodyIntro, BodyMain, H2, H3 } from "../../../styles/TextStyles"
import Letter from "../../../components/special/Letter"
import { useAboutMeData } from "../../../utils/hooks/useAboutMeData"
import { useStats } from "../../../utils/hooks/useStats"

const Story = () => {
  let text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus vivamus risus posuere vitae vivamus. Enim dui nibh magna hac id lacus euismod mi diam. Consequat elementum tincidunt egestas egestas orci. At facilisi ultrices tortor, volutpat varius sit vitae rhoncus. Ut nisi, feugiat leo aenean massa enim."

  const storyData = useAboutMeData().find(
    edge => edge.node.for === "storySection"
  )
  if (storyData) {
    text = storyData.node.text
  }

  let sentences = text.match(/[^.!?]+[.!?]+/g)
  let paragraphs = []
  for (let i = 0; i < sentences.length; i += 5) {
    let paragraph = sentences.slice(i, i + 5).join(" ")
    paragraphs.push(paragraph)
  }

  const statsData = useStats()[0].node

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
                  <BodyMain>
                    👨🏾 Full name is <StatText>{statsData.fullName}</StatText>{" "}
                  </BodyMain>
                  <BodyMain>
                    📍 Lives in <StatText>{statsData.location}</StatText>{" "}
                  </BodyMain>
                  <BodyMain>
                    🍜 Favorite food is <StatText>{statsData.favFood}</StatText>{" "}
                  </BodyMain>
                  <BodyMain>
                    🎬 Favorite movie is{" "}
                    <StatText>{statsData.favMovie}</StatText>{" "}
                  </BodyMain>
                  <BodyMain>
                    🏀 Favorite NBA team is the{" "}
                    <StatText>{statsData.favNba}</StatText>{" "}
                  </BodyMain>
                  <BodyMain>
                    🏈 Favorite NFL team is the{" "}
                    <StatText>{statsData.favNfl}</StatText>{" "}
                  </BodyMain>
                  <BodyMain>
                    🎤 Favorite musician is{" "}
                    <StatText>{statsData.favMusician}</StatText>{" "}
                  </BodyMain>
                  <BodyMain>
                    ♑️ Fun fact: <StatText>{statsData.funFact}</StatText>{" "}
                  </BodyMain>
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

const StatText = styled.span`
  font-weight: 600;
  display: inline-block;
  text-align: justify;
  width: auto;
  max-width: 380px;
  vertical-align: top;

  @media (max-width: 768px) {
    max-width: 280px;
  }
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
