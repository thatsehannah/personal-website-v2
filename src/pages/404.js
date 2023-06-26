import React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import NotFound from "../sections/notFoundPage/NotFound"

function NotFoundPage() {
  return (
    <Layout>
      <Seo title="404: Not found" />
      <NotFound />
    </Layout>
  )
}

export default NotFoundPage
