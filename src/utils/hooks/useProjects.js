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
            }
          }
        }
      }
    `
  )

  return allProjectData.edges
}
