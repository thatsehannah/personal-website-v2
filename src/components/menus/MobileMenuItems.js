import React from "react"
import { UilEnvelope } from "@iconscout/react-unicons"
import { menuOptions } from "../../data/menuOptions"
import { Link } from "gatsby"
import MenuButton from "../buttons/MenuButton"

const MobileMenuItems = () => {
  return (
    <>
      {menuOptions.map((item, i) => (
        <Link to={item.link} key={i}>
          <MenuButton title={item.title} color="#0093e9" hoverColor="#80d0c7" />
        </Link>
      ))}
      <a href="mailto:elliotchannah@outlook.com">
        <MenuButton
          title="elliotchannah@outlook.com"
          icon={<UilEnvelope color="#0093e9" size="22" />}
          color="#0093e9"
          hoverColor="#80d0c7"
        />
      </a>
    </>
  )
}

export default MobileMenuItems
