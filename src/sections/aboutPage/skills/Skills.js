import React from "react"
import styled from "styled-components"
import Letter from "../../../components/special/Letter"
import { useSkills } from "../../../utils/hooks/useSkills"
import { BodyMain, H2, H3 } from "../../../styles/TextStyles"

const Skills = () => {
  const skillData = useSkills()
  const languages = skillData.filter(edge => edge.node.category === "language")
  const frameworks = skillData.filter(
    edge => edge.node.category === "framework"
  )
  const software = skillData.filter(edge => edge.node.category === "software")

  return (
    <Wrapper>
      <ContentWrapper>
        <Title>
          Rel
          <Letter />
          vant Skills
        </Title>
        <TableWrapper>
          <Column>
            <ColumnTitle>Software</ColumnTitle>
            <SkillsWrapper>
              {software.map(({ node }) => (
                <SkillText>{node.name}</SkillText>
              ))}
            </SkillsWrapper>
          </Column>
          <CenterColumn>
            <ColumnTitle>Languages</ColumnTitle>
            <SkillsWrapper>
              {languages.map(({ node }) => (
                <SkillText>{node.name}</SkillText>
              ))}
            </SkillsWrapper>
          </CenterColumn>
          <Column>
            <ColumnTitle>Frameworks</ColumnTitle>
            <SkillsWrapper>
              {frameworks.map(({ node }) => (
                <SkillText>{node.name}</SkillText>
              ))}
            </SkillsWrapper>
          </Column>
        </TableWrapper>
      </ContentWrapper>
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
  gap: 50px;

  @media (max-width: 768px) {
    width: 100%;
    grid-template-columns: auto;
  }
`

const Title = styled(H2)`
  text-align: center;
`

const TableWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
`

const Column = styled.div`
  display: grid;
  gap: 30px;
`

const CenterColumn = styled(Column)`
  border-left: 0.5px solid rgba(0, 0, 0, 0.2);
  border-right: 0.5px solid rgba(0, 0, 0, 0.2);
`

const ColumnTitle = styled(H3)`
  text-align: center;
`

const SkillsWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  gap: 15px;
  grid-auto-flow: column;
  text-align: center;
`

const SkillText = styled(BodyMain)`
  color: rgba(0, 0, 0, 0.5);
`
