import React, { useRef } from "react"
import styled from "styled-components"
import Letter from "../../../components/special/Letter"
import { useSkills } from "../../../utils/hooks/useSkills"
import { BodyMain, H2, H3 } from "../../../styles/TextStyles"
import { useIntersection } from "../../../utils/hooks/useIntersection"
import { fadeInAnimation } from "../../../styles/FadeInAnimation"

const Skills = () => {
  const ref = useRef(null)
  const inView = useIntersection(ref, { threshold: 0.4 })
  const skillData = useSkills()

  const languages = skillData.filter(edge => edge.node.category === "language")
  const frameworks = skillData.filter(
    edge => edge.node.category === "framework"
  )
  const software = skillData.filter(edge => edge.node.category === "software")

  return (
    <Wrapper>
      <ContentWrapper ref={ref} inView={inView}>
        <Title>
          Rel
          <Letter />
          vant Skills
        </Title>
        <TableWrapper>
          <Column>
            <ColumnTitle>Software</ColumnTitle>
            <SkillsWrapper>
              {software.map(({ node }, index) => (
                <SkillText key={index}>{node.name}</SkillText>
              ))}
            </SkillsWrapper>
          </Column>
          <CenterColumn>
            <ColumnTitle>Languages</ColumnTitle>
            <SkillsWrapper>
              {languages.map(({ node }, index) => (
                <SkillText key={index}>{node.name}</SkillText>
              ))}
            </SkillsWrapper>
          </CenterColumn>
          <Column>
            <ColumnTitle>Frameworks</ColumnTitle>
            <SkillsWrapper>
              {frameworks.map(({ node }, index) => (
                <SkillText key={index}>{node.name}</SkillText>
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
  width: 1400px;
  margin: 0 auto;
  gap: 20px;
  opacity: 0;
  transition: opacity 1s ease-in;
  ${props => props.inView && fadeInAnimation}

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

  @media (max-width: 768px) {
    grid-template-columns: auto;
    gap: 20px;
  }
`

const Column = styled.div`
  display: grid;
  gap: 30px;
  padding: 25px;
`

const CenterColumn = styled(Column)`
  border-left: 0.5px solid rgba(0, 0, 0, 0.2);
  border-right: 0.5px solid rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    border-left: none;
    border-right: none;
    border-top: 0.5px solid rgba(0, 0, 0, 0.2);
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);
  }
`

const ColumnTitle = styled(H3)`
  text-align: center;
  font-weight: 500;
`

const SkillsWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(5, 0.5fr);
  gap: 15px;
  grid-auto-flow: column;
  text-align: center;

  @media (max-width: 768px) {
    gap: 20px;
  }
`

const SkillText = styled(BodyMain)`
  color: rgba(0, 0, 0, 0.5);
`
