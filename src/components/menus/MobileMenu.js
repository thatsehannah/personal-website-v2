import React from "react"
import styled from "styled-components"
import { UilEnvelope } from "@iconscout/react-unicons"
import { menuOptions } from "../../data/menuOptions"
import { Link } from "gatsby"
import MenuButton from "../buttons/MenuButton"

const MobileMenu = () => {
  return (
    <Wrapper>
      {menuOptions.map((item, i) => (
        <Link to={item.link} key={i}>
          <MenuButton title={item.title} color="#0093e9" hoverColor="#80d0c7" />
        </Link>
      ))}
      {/* <EmailWrapper>
        <a href="mailto:elliotchannah@outlook.com">
          <MenuButton
            title="elliotchannah@outlook.com"
            icon={<UilEnvelope color="#0093e9" size="22" />}
            color="#0093e9"
            hoverColor="#80d0c7"
          />
        </a>
      </EmailWrapper> */}
    </Wrapper>
  )
}

export default MobileMenu

const Wrapper = styled.div`
  display: grid;
  gap: 10px;
  width: 100%;
  margin: 20px 0;
`

const EmailWrapper = styled.div`
  display: grid;
  align-items: center;
  text-align: center;
`
