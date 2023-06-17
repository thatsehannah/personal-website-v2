import { useStaticQuery, graphql } from "gatsby"

export const useCertficates = () => {
  const { allCertificateData } = useStaticQuery(
    graphql`
      query CertificateQuery {
        allCertificateData {
          edges {
            node {
              issueDate
              title
              url
              from
            }
          }
        }
      }
    `
  )

  return allCertificateData.edges
}
