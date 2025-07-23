import { useStaticQuery, graphql } from "gatsby"

export const useProjects = () => {
  const { allProjectData } = useStaticQuery(
    graphql`
      query ProjectQuery {
        allProjectData {
          edges {
            node {
              code
              name
              imageUrl
              domain
              description
              platform
              live
              finishedDate
            }
          }
        }
      }
    `
  )

  return allProjectData.edges.sort((proj1, proj2) => {
    var d1 = new Date(proj1.node.finishedDate)
    var d2 = new Date(proj2.node.finishedDate)

    return new Date(proj2.node.finishedDate) - new Date(proj1.node.finishedDate)
  })
}
