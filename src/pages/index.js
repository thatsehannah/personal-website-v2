import React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import Hero from "../sections/indexPage/hero/Hero"
import IntroAbout from "../sections/indexPage/about/IntroAbout"
import IntroWork from "../sections/indexPage/work/IntroWork"
import IntroProjects from "../sections/indexPage/projects/IntroProjects"

function IndexPage() {
  return (
    <Layout>
      <Seo title="Home" />
      <Hero />
      <IntroAbout />
      <IntroWork />
      <IntroProjects />
    </Layout>
  )
}

export default IndexPage
