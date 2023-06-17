import React from "react"
import styled from "styled-components"
import { useCertficates } from "../../utils/hooks/useCertificates"

const Certifications = () => {
  const certData = useCertficates()
  console.log(certData.map(({ node }) => node.title))

  return (
    <>
      <p>Certs</p>
    </>
  )
}

export default Certifications
