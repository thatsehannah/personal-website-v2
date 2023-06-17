import React from "react"
import styled from "styled-components"
import { useCertficates } from "../../utils/hooks/useCertificates"
import { BodyIntro, BodyMain } from "../../styles/TextStyles"

const Certifications = () => {
  const certData = useCertficates()
  console.log(certData.map(({ node }) => node.title))

  return (
    <Wrapper>
      {certData.map(({ node }) => (
        <ContentWrapper key={node.title}>
          <CertWrapper>
            <Cert src={node.url} />
          </CertWrapper>
          <TextWrapper>
            <BodyIntro>
              {node.title} from {node.from}
            </BodyIntro>
            <BodyMain>Received on {node.issueDate}</BodyMain>
          </TextWrapper>
        </ContentWrapper>
      ))}
    </Wrapper>
  )
}

export default Certifications

const Wrapper = styled.div`
  display: grid;
  gap: 50px;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;

  &:nth-child(even) {
    flex-direction: row-reverse;
  }
`

const CertWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 147, 233, 0.2);
  border: 0.5px solid black;
  width: 600px;
  padding: 20px;
`

const Cert = styled.img`
  height: 90%;
  width: 100%;
  transition: 0.5s ease-in-out;

  :hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`

const TextWrapper = styled.div``
