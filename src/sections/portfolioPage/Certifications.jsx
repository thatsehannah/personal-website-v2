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
            <Title>
              {node.title} from {node.from}
            </Title>
            <BodyMain>Received on {node.issueDate}</BodyMain>
            <List>
              <ListItem>
                Ornare lectus sit amet est placerat in egestas erat imperdiet.
              </ListItem>
              <ListItem>
                Cras tincidunt lobortis feugiat vivamus at augue eget arcu
                dictum.
              </ListItem>
              <ListItem>Posuere mori leo urna molestie at.</ListItem>
              <ListItem>
                Aliquet bibendu enfacilisis gravida neque convallis a.
              </ListItem>
            </List>
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

  border: 0.5px solid black;
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
  flex: 1;
`

const Title = styled(BodyIntro)`
  margin-bottom: 25px;
  font-weight: 500;
`

const List = styled.ul`
  list-style-type: disc;
  padding: 12px;
`

const ListItem = styled.li`
  font: ${BodyMain};
  padding: 10px;
`
