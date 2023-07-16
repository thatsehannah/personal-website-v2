import React from "react"
import styled from "styled-components"
import ResumeCard from "../cards/ResumeCard"

const ResumeWrapper = ({ workData }) => {
  return (
    <WorkWrapper count={workData.length}>
      {workData.map(({ node }, index) => (
        <ResumeCard
          overflow={"true"}
          key={index}
          isOdd={index % 2 !== 0}
          logo={node.logo}
          company={node.company.toLowerCase()}
          title={node.position}
          secondaryText={node.duties}
          start={node.start}
          end={node.end}
          url={node.url}
        />
      ))}
    </WorkWrapper>
  )
}

export default ResumeWrapper

const WorkWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 40px;
  justify-content: space-evenly;

  ${props =>
    props.count % 2 !== 0 &&
    `
    > :last-child {
    margin-left: auto;
    margin-right: auto;
    grid-column-start: 1;
    grid-column-end: 3;
  }
  `}

  @media (max-width: 1024px) {
    width: 100%;
    grid-template-columns: auto;

    ${props =>
      props.count % 2 !== 0 &&
      `
      > :last-child {
      margin: 0 auto;
      grid-column-start: initial;
      grid-column-end: initial;
    }
    `}
  }

  @media (max-width: 768px) {
    ${props =>
      props.count % 2 !== 0 &&
      `
      > :last-child {
      grid-column-start: initial;
      grid-column-end: initial;
    }
    `}
  }
`
