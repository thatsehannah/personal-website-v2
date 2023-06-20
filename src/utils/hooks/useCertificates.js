import { useStaticQuery, graphql } from "gatsby"

export const useCertficates = () => {
  const { allCertificateData } = useStaticQuery(
    graphql`
      query CertificateQuery {
        allCertificateData {
          edges {
            node {
              issueDate(formatString: "MM-DD-YYYY")
              title
              url
              from
              description
            }
          }
        }
      }
    `
  )

  return allCertificateData.edges
}
