import React from "react"
import { UilEnvelope } from "@iconscout/react-unicons"
import { menuOptions } from "../../data/menuOptions"
import { Link } from "gatsby"
import MenuButton from "../buttons/MenuButton"
import { useTheme } from "styled-components"

const MobileMenuItems = () => {
  const theme = useTheme()

  return (
    <>
      {menuOptions.map((item, i) => (
        <Link to={item.link} key={i}>
          <MenuButton
            title={item.title}
            color={theme.secondaryColor}
            hoverColor={theme.primaryColor}
          />
        </Link>
      ))}
      <a href="mailto:elliotchannahiii@gmail.com">
        <MenuButton
          title="elliotchannahiii@gmail.com"
          icon={<UilEnvelope color={theme.secondaryColor} size="22" />}
          color={theme.secondaryColor}
          hoverColor={theme.primaryColor}
        />
      </a>
    </>
  )
}

export default MobileMenuItems
