import React from "react"
import styled from "styled-components"
import { useSkills } from "../../../utils/hooks/useSkills"

const Skills = () => {
  const skillData = useSkills()
  const languages = skillData.filter(edge => edge.node.category === "language")
  const frameworks = skillData.filter(
    edge => edge.node.category === "framework"
  )
  const software = skillData.filter(edge => edge.node.category === "software")

  return (
    <Wrapper>
      <ContentWrapper></ContentWrapper>
    </Wrapper>
  )
}

export default Skills

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
