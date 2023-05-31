import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const IntroWork = () => {
  //for future reference: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
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
