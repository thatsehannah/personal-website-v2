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
            <HeartSpan>
              {node.isFavorite && <UisFavorite size={16} />}
            </HeartSpan>
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
  gap: 15px;
  grid-auto-flow: column;
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    gap: 20px;
  }
`

const SkillText = styled(BodyMain)`
  color: ${props => props.theme.secondaryColor};
`

const HeartSpan = styled.span`
  align-items: center;

  color: gold;
`
