import React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import Hero from "../sections/indexPage/hero/Hero"
import IntroAbout from "../sections/indexPage/about/IntroAbout"

function IndexPage() {
  return (
    <Layout>
      <Seo title="Home" />
      <Hero />
      <IntroAbout />
    </Layout>
  )
}

export default IndexPage
