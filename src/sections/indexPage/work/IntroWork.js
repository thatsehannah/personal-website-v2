import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const IntroWork = () => {
  const workData = useStaticQuery(graphql`
    query MyQuery {
      allWork {
        edges {
          node {
            title
            start(formatString: "MM/YYYY")
            position
            end(formatString: "MM/YYYY")
          }
        }
      }
    }
  `)

  return (
    <div>
      {workData.allWork.edges.map(({ node, index }) => (
        <p>{node.title}</p>
      ))}
    </div>
  )
}

export default IntroWork
