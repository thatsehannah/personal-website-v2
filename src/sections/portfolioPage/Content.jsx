import React, { useState } from "react"
import styled from "styled-components"
import { H1, H3 } from "../../styles/TextStyles"

const Content = () => {
  const tabs = ["Certifications", "Projects"]
  const [active, setActive] = useState(tabs[0])
  return (
    <Wrapper>
      <ContentWrapper>
        <Title>Portfolio</Title>
        <TabWrapper>
          {tabs.map(tab => (
            <Tab
              key={tab}
              active={active === tab}
              onClick={() => setActive(tab)}
            >
              <TabTitle>{tab}</TabTitle>
            </Tab>
          ))}
        </TabWrapper>
        <TabContent>
          {active === "Certifications" && <div>Certs</div>}
          {active == "Projects" && <div>Projects</div>}
        </TabContent>
      </ContentWrapper>
    </Wrapper>
  )
}

export default Content

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 20px;
`

const ContentWrapper = styled.div`
  display: grid;
  gap: 40px;

  width: 1300px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
  }
`

const Title = styled(H1)`
  text-align: center;
`

const TabWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-evenly;
    width: 100%;
  }
`

const Tab = styled.div`
  padding: 10px 60px;
  cursor: pointer;
  border: 0;
  outline: 0;

  @media (max-width: 768px) {
    padding: 0;
  }

  ${props =>
    props.active &&
    `
    border-bottom: 2px solid black;
  `}
`

const TabTitle = styled(H3)`
  font-weight: 400;
`

const TabContent = styled.div``
