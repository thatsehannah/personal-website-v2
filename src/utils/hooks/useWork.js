import { useStaticQuery, graphql } from "gatsby"

export const useWork = () => {
  //for future reference: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
  const { allWork } = useStaticQuery(graphql`
    query MyQuery {
      allWork {
        edges {
          node {
            title
            start(formatString: "MM/YYYY")
            position
            end(formatString: "MM/YYYY")
          }
        }
      }
    }
  `)

  return allWork.edges
}
