import { useStaticQuery, graphql } from "gatsby"

export const useWork = () => {
  //for future reference: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
  const { allWorkData } = useStaticQuery(graphql`
    query WorkQuery {
      allWorkData {
        edges {
          node {
            uid
            start(formatString: "MMM YYYY")
            position
            end(formatString: "MMM YYYY")
            logo
            duties
          }
        }
      }
    }
  `)

  return allWorkData.edges
}
