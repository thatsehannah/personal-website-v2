import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { MediumText } from "../../styles/TextStyles"

const MenuButton = props => {
  const { title, link } = props

  return (
    <Link to={link}>
      <MenuItem title={title}>
        <Title>{title}</Title>
      </MenuItem>
    </Link>
  )
}

export default MenuButton

const MenuItem = styled.div`
  color: #0093e9;
  padding: 10px;
  transition: 0.5s ease-out;
  border-radius: 10px;

  :hover {
    background: rgba(0, 0, 0, 0.1);
    transform: scale(1.2);
  }
`

const Title = styled(MediumText)``
