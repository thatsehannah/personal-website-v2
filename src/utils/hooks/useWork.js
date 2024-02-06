import { useStaticQuery, graphql } from "gatsby"

export const useWork = () => {
  const { allWorkData } = useStaticQuery(graphql`
    query WorkQuery {
      allWorkData {
        edges {
          node {
            uid
            start(formatString: "MMM. YYYY")
            position
            end(formatString: "MMM. YYYY")
            logo
            duties
            url
            company
            isCurrent
          }
        }
      }
    }
  `)

  return allWorkData.edges
}
