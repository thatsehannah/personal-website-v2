import { useStaticQuery, graphql } from "gatsby"

export const useStats = () => {
  const { allStats } = useStaticQuery(graphql`
    query StatsQuery {
      allStats {
        edges {
          node {
            key
            value
            emoji
            order
          }
        }
      }
    }
  `)

  return allStats.edges
}
