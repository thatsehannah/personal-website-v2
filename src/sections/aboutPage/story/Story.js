import React from "react"
import styled from "styled-components"
import { BodyIntro, BodyMain, H2 } from "../../../styles/TextStyles"
import Letter from "../../../components/special/Letter"

const Story = () => {
  return (
    <Wrapper id="story">
      <ContentWrapper>
        <LeftSide>
          <TextWrapper>
            <H2>
              A Little About M<Letter />
            </H2>
            <BodyWrapper>
              <BodyMain>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
                vivamus risus posuere vitae vivamus. Enim dui nibh magna hac id
                lacus euismod mi diam. Consequat elementum tincidunt egestas
                egestas orci. At facilisi ultrices tortor, volutpat varius sit
                vitae rhoncus. Ut nisi, feugiat leo aenean massa enim.
              </BodyMain>
              <BodyIntro>Stats</BodyIntro>
              <BodyMain>
                At facilisi ultrices tortor, volutpat varius sit vitae rhoncus.
                Ut nisi, feugiat leo aenean massa enim. Sed accumsan, ac dictum
                tempus luctus id in porttitor dictum.
              </BodyMain>
            </BodyWrapper>
          </TextWrapper>
        </LeftSide>
        <RightSide>
          <MemojiWrapper>
            <Memoji src="/images/memojis/story-1.png" />
          </MemojiWrapper>
          {/* <MemojiWrapper>
            <Memoji src="/images/memojis/story-2.png" />
          </MemojiWrapper> */}
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

const RightSide = styled.div``

const MemojiWrapper = styled.div`
  display: grid;
  justify-content: center;
`

const Memoji = styled.img`
  height: 500px;
  position: relative;

  @media (max-width: 768px) {
    height: 350px;
  }
`
