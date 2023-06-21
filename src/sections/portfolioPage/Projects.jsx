import React from "react"
import styled from "styled-components"
import { useProjects } from "../../utils/hooks/useProjects"

const Projects = () => {
  const projectData = useProjects()
  console.log(projectData)
  return <div>Projects section</div>
}

export default Projects
