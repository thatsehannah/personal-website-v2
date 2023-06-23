import React, { useState } from "react"
import styled from "styled-components"
import { useCertficates } from "../../utils/hooks/useCertificates"
import { BodyIntro, BodyMain, MediumText } from "../../styles/TextStyles"
import MainButton from "../../components/buttons/MainButton"
import { fadeInAnimation } from "../../styles/FadeInAnimation"

const Certifications = () => {
  const [itemsToShow, setItemsToShow] = useState(3)
  const certData = useCertficates()

  const handleShowMoreItems = () => {
    setItemsToShow(prevItemsToShow => prevItemsToShow + 3)
  }

  return (
    <Wrapper>
      {certData.slice(0, itemsToShow).map(({ node }, index) => (
        <ContentWrapper key={index}>
          <CertWrapper>
            <Cert
              src={node.url}
              onClick={() => window.open(node.url, "_blank")}
            />
          </CertWrapper>
          <TextWrapper>
            <Title>
              {node.title} from {node.from}
            </Title>
            <Date>Issued on {node.issueDate}</Date>
            <BodyMain>{node.description}</BodyMain>
          </TextWrapper>
        </ContentWrapper>
      ))}
      <ButtonWrapper>
        <MainButton
          text="Show More"
          onClick={handleShowMoreItems}
          disabled={itemsToShow >= certData.length}
        />
      </ButtonWrapper>
    </Wrapper>
  )
}

export default Certifications

const Wrapper = styled.div`
  display: grid;
  gap: 120px;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 41px;
  ${fadeInAnimation}

  &:nth-child(even) {
    flex-direction: row-reverse;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    &:nth-child(even) {
      flex-direction: column;
    }
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

  @media (max-width: 768px) {
    width: 100%;
  }
`

const Cert = styled.img`
  height: 90%;
  width: 90%;
  transition: 0.5s ease-in-out;

  :hover {
    cursor: pointer;
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    width: 98%;
    height: 98%;

    &:hover {
      transform: none;
      cursor: initial;
    }
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

const ButtonWrapper = styled.div`
  display: grid;
  justify-content: center;
`
