import React from "react"
import styled from "styled-components"
import { UilBatteryBolt, UilWifi } from "@iconscout/react-unicons"
import { Caption } from "../../styles/TextStyles"

const MobileWrapper = props => {
  const { image, altText } = props

  let batteryIconSize
  if (typeof window !== undefined) {
    batteryIconSize = window.innerWidth <= 768 ? 18 : 26
  }

  return (
    <Wrapper>
      <PhoneWrapper>
        <Toolbar>
          <LeftSide>
            <ToolbarText>Carrier</ToolbarText>
            <UilWifi size={12} style={{ marginTop: "-1.5px" }} />
          </LeftSide>
          <Center>
            <ToolbarText>9:41</ToolbarText>
          </Center>
          <RightSide>
            <UilBatteryBolt size={batteryIconSize} />
          </RightSide>
        </Toolbar>
        <ImageWrapper>
          <Image src={image} alt={altText} />
        </ImageWrapper>
      </PhoneWrapper>
    </Wrapper>
  )
}

export default MobileWrapper

const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  border-radius: 20px;
  padding: 20px;
  background-color: ${props => props.theme.mobileBackgroundColor};
  border: ${props => props.theme.border};

  @media (max-width: 1024px) {
    border: none;
  }
`

const PhoneWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 11px solid black;
  border-radius: 50px;
  height: 720px;
  width: 380px;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 480px;
    width: 250px;
    border-width: 6px;
    border-radius: 30px;
  }
`

const ImageWrapper = styled.div`
  width: 100%;
  height: auto;
  background-color: #f7f8f7;
  overflow: hidden;
`

const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 45px;
  margin: 0px 20px;

  @media (max-width: 1024px) {
    height: 35px;
    margin: 0 15px;
  }
`

const LeftSide = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  vertical-align: top;

  @media (max-width: 1024px) {
    gap: 2px;
  }
`

const Center = styled.div`
  display: grid;
  justify-content: center;
  margin-left: -20px;
`

const RightSide = styled.div`
  display: grid;
  justify-content: right;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
`

const ToolbarText = styled(Caption)`
  font-size: 0.8rem;

  @media (max-width: 768px) {
    font-size: 0.6rem;
  }
`
