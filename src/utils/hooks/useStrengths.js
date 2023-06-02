import { useStaticQuery, graphql } from "gatsby"

export const useStrength = () => {
  const { allStrengths } = useStaticQuery(graphql`
    query StrengthQuery {
      allStrengths {
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

  return allStrengths.edges
}
