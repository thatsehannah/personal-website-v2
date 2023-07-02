import React from "react"
import styled from "styled-components"
import { BodyMain } from "../../../styles/TextStyles"
import { UisFavorite } from "@iconscout/react-unicons-solid"

const SkillsWrapper = props => {
  const { skill } = props

  return (
    <>
      <Wrapper>
        {skill.map(({ node }, index) => (
          <SkillText key={index} fav={node.isFavorite}>
            {node.name}{" "}
            <StarSpan>{node.isFavorite && <UisFavorite size={16} />}</StarSpan>
          </SkillText>
        ))}
      </Wrapper>
    </>
  )
}

export default SkillsWrapper

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(5, 0.5fr);
  gap: 20px;
  grid-auto-flow: column;
  /* column-gap: 60px; possibility that i might want to use this property again */
  align-items: center;
  text-align: center;
`

const SkillText = styled(BodyMain)`
  color: ${props => props.theme.secondaryColor};
`

const StarSpan = styled.span`
  align-items: center;
  color: gold;
`
