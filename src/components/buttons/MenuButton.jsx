import React from "react"
import styled from "styled-components"
import { MediumText } from "../../styles/TextStyles"

const MenuButton = props => {
  const { title, icon, color, hoverColor } = props

  return (
    <MenuItem color={color} hoverColor={hoverColor} icon={icon}>
      {icon && <span>{icon}</span>}
      <Title>{title}</Title>
    </MenuItem>
  )
}

export default MenuButton

const MenuItem = styled.div`
  display: flex;
  color: ${props =>
    props.color ? props.color : props.theme.menuButton.textColor};
  transition: 0.5s ease-out;
  gap: ${props => props.icon && "8px"};

  span {
    display: grid;
    align-items: center;
  }

  svg {
    transition: 0.5s ease-out;
  }

  :hover {
    transform: scale(1.2);
    color: ${props =>
      props.hoverColor ? props.hoverColor : props.theme.menuButton.hoverColor};

    svg {
      fill: ${props =>
        props.hoverColor
          ? props.hoverColor
          : props.theme.menuButton.hoverColor};
    }

    @media (max-width: 768px) {
      transform: scale(1);
    }
  }
`

const Title = styled(MediumText)`
  /* margin-left: ${props => (props.icon ? "8px" : "0px")}; */
`
