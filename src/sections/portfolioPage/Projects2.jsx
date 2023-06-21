import React, { Fragment } from "react"
import styled from "styled-components"
import { useProjects } from "../../utils/hooks/useProjects"
import WebpageWrapper from "./WebpageWrapper"

const Projects2 = () => {
  const projectData = useProjects()

  return (
    <Wrapper>
      {projectData.map(({ node }, index) => {
        return (
          <Fragment key={index}>
            {node.platform === "Web" && <WebpageWrapper data={node} />}
          </Fragment>
        )
      })}
    </Wrapper>
  )
}

export default Projects2

const Wrapper = styled.div`
  display: grid;
  gap: 80px;
`
