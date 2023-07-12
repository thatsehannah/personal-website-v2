import { useStaticQuery, graphql } from "gatsby"

export const useCertficates = () => {
  const { allCertificateData } = useStaticQuery(graphql`
    query CertificateQuery {
      allCertificateData {
        edges {
          node {
            uid
            title
            from
            description
            issueDate(formatString: "MM-DD-YYYY")
            url
            imageUrl
          }
        }
      }
    }
  `)

  return allCertificateData.edges
}
