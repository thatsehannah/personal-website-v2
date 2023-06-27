import { useStaticQuery, graphql } from "gatsby"

export const useSkills = () => {
  const { allSkills } = useStaticQuery(graphql`
    query SkillsQuery {
      allSkills {
        edges {
          node {
            name
            category
            isFavorite
          }
        }
      }
    }
  `)

  return allSkills.edges
}
