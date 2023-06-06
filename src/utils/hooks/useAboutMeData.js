import { useStaticQuery, graphql } from "gatsby"

export const useAboutMeData = () => {
  const { allAboutMe } = useStaticQuery(
    graphql`
      query AboutMeQuery {
        allAboutMe {
          edges {
            node {
              for
              text
            }
          }
        }
      }
    `
  )

  return allAboutMe.edges
}
