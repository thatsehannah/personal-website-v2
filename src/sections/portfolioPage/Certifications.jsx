import React from "react"
import styled from "styled-components"
import { useCertficates } from "../../utils/hooks/useCertificates"
import { BodyIntro, MediumText } from "../../styles/TextStyles"

const Certifications = () => {
  const certData = useCertficates()

  return (
    <Wrapper>
      {certData.map(({ node }) => (
        <ContentWrapper key={node.title}>
          <CertWrapper>
            <Cert src={node.url} />
          </CertWrapper>
          <TextWrapper>
            <Title>
              {node.title} from {node.from}
            </Title>
            <Date>Issued on {node.issueDate}</Date>
            <Description>{node.description}</Description>
          </TextWrapper>
        </ContentWrapper>
      ))}
    </Wrapper>
  )
}

export default Certifications

const Wrapper = styled.div`
  display: grid;
  gap: 80px;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 41px;

  &:nth-child(even) {
    flex-direction: row-reverse;
  }
`

const CertWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 147, 233, 0.2);

  border: 0.5px solid rgba(0, 0, 0, 0.3);
  border-radius: 24px;
  width: 550px;
  height: 440px;
  padding: 20px;
`

const Cert = styled.img`
  height: 90%;
  width: 90%;
  transition: 0.5s ease-in-out;

  :hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;
`

const Title = styled(BodyIntro)`
  font-weight: 500;
`

const Date = styled(MediumText)`
  color: rgba(0, 0, 0, 0.5);
`

const Description = styled(MediumText)``
