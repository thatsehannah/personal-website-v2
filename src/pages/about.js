import React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import AboutHero from "../sections/aboutPage/hero/AboutHero"
import Story from "../sections/aboutPage/story/Story"
import Strengths from "../sections/aboutPage/strengths/Strengths"
import Work from "../sections/aboutPage/work/Work"
import Education from "../sections/aboutPage/education/Education"
import Skills from "../sections/aboutPage/skills/Skills"

const About = () => {
  return (
    <Layout>
      <Seo title={"About"} />
      <AboutHero />
      <Story />
      <Strengths />
      <Work />
      <Education />
      <Skills />
    </Layout>
  )
}

export default About
