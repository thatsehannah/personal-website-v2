import React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import ContactForm from "../sections/contactPage/ContactForm"

const Contact = () => {
  return (
    <Layout>
      <Seo title="Contact" />
      <ContactForm />
    </Layout>
  )
}

export default Contact
