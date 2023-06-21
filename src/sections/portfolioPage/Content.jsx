import React, { useState } from "react"
import styled from "styled-components"
import { H1, H3 } from "../../styles/TextStyles"
import Certifications from "./Certifications"
import Projects from "./Projects"
import Projects2 from "./Projects2"

const Content = () => {
  const [active, setActive] = useState("cert")
  return (
    <Wrapper>
      <ContentWrapper>
        <Title>Portfolio</Title>
        <TabWrapper>
          <Tab active={active === "cert"} onClick={() => setActive("cert")}>
            <TabTitle>Certification</TabTitle>
          </Tab>
          <Tab active={active === "proj"} onClick={() => setActive("proj")}>
            <TabTitle>Projects</TabTitle>
          </Tab>
        </TabWrapper>
        <TabContent>
          {active === "cert" && <Certifications />}
          {active === "proj" && <Projects2 />}
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
  gap: 100px;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-evenly;
    width: 100%;
  }
`

const Tab = styled.div`
  padding: 10px 0;
  cursor: pointer;
  position: relative;

  @media (max-width: 768px) {
    padding: 0;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 3px;
    background-color: #80d0c7;
    transition: width 1s;
  }

  ${({ active }) =>
    active &&
    `
    &::after {
      width: 100%;
    }
  `}
`

const TabTitle = styled(H3)`
  font-weight: 400;
`

const TabContent = styled.div``
