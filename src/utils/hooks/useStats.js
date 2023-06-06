import { useStaticQuery, graphql } from "gatsby"

export const useStats = () => {
  const { allStats } = useStaticQuery(graphql`
    query StatsQuery {
      allStats {
        edges {
          node {
            fullName
            location
            favFood
            favMovie
            favNba
            favNfl
            favMusician
            funFact
          }
        }
      }
    }
  `)

  return allStats.edges
}
