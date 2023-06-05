import { useStaticQuery, graphql } from "gatsby"

export const useStrength = () => {
  const { allStrengthData } = useStaticQuery(graphql`
    query StrengthQuery {
      allStrengthData {
        edges {
          node {
            description
            rank
            image
            title
          }
        }
      }
    }
  `)

  return allStrengthData.edges
}
