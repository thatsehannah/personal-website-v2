import React from "react"
import styled from "styled-components"
import { useStats } from "../../../utils/hooks/useStats"
import { BodyMain, H3 } from "../../../styles/TextStyles"

const Stats = () => {
  const statsData = useStats()

  return (
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
  )
}

export default Stats

const StatsWrapper = styled.div`
  display: grid;
  gap: 24px;
  border: ${props => props.theme.border};
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
