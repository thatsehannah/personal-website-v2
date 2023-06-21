import React, { Fragment } from "react"
import styled from "styled-components"
import { useProjects } from "../../utils/hooks/useProjects"
import WebpageWrapper from "./WebpageWrapper"
import { H3, MediumText } from "../../styles/TextStyles"
import MobileWrapper from "./MobileWrapper"

const Projects2 = () => {
  const projectData = useProjects()

  return (
    <Wrapper>
      {projectData.map(({ node }, index) => (
        <ContentWrapper key={index}>
          {node.platform === "Web" && <WebpageWrapper image={node.imageUrl} />}
          {node.platform === "iOS" && <MobileWrapper image={node.imageUrl} />}
          <TextWrapper>
            <TopWrapper>
              <H3>{node.name}</H3>
              <MediumText>{node.description}</MediumText>
            </TopWrapper>
            <BottomWrapper>
              <SmallCard>{node.platform}</SmallCard>
              <SmallCard>{node.domain}</SmallCard>
            </BottomWrapper>
          </TextWrapper>
        </ContentWrapper>
      ))}
    </Wrapper>
  )
}

export default Projects2

const Wrapper = styled.div`
  display: grid;
  gap: 80px;
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 50px;
`

const TextWrapper = styled.div`
  display: grid;
  justify-content: space-between;
`

const TopWrapper = styled.div``

const BottomWrapper = styled.div``

const SmallCard = styled.div``
