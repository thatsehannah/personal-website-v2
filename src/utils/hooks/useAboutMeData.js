import { useStaticQuery, graphql } from "gatsby"

export const useAboutMeData = forField => {
  let filter
  if (forField) {
    filter = { for: { eq: forField } }
  } else {
    filter = {}
  }

  const { allAboutMe } = useStaticQuery(
    graphql`
      query AboutMeQuery($filter: AboutMeFilterInput) {
        allAboutMe(filter: $filter) {
          edges {
            node {
              for
              text
            }
          }
        }
      }
    `,
    { filter: filter }
  )

  return allAboutMe.edges
}
