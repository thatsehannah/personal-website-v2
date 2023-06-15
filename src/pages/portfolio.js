import React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import Content from "../sections/portfolioPage/Content"

const Portfolio = () => {
  return (
    <Layout>
      <Seo title="Portfolio" />
      <Content />
    </Layout>
  )
}

export default Portfolio
