import React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import Hero from "../sections/indexPage/hero/Hero"

function IndexPage() {
  return (
    <Layout>
      <Seo title="Home" />
      <Hero />
    </Layout>
  )
}

export default IndexPage
