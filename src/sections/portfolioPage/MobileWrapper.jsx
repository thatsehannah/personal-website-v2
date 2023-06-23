import React from "react"
import styled from "styled-components"
import { UilBatteryBolt, UilWifi } from "@iconscout/react-unicons"
import { Caption, Caption2 } from "../../styles/TextStyles"

const MobileWrapper = props => {
  return (
    <Wrapper>
      <PhoneWrapper>
        <Toolbar>
          <LeftSide>
            <Caption>Carrier</Caption>
            <UilWifi size={12} style={{ marginTop: "-1.5px" }} />
          </LeftSide>
          <Center>
            <Caption2>9:41</Caption2>
          </Center>
          <RightSide>
            <UilBatteryBolt />
          </RightSide>
        </Toolbar>
        <ImageWrapper>
          <Image src={props.image} />
        </ImageWrapper>
      </PhoneWrapper>
    </Wrapper>
  )
}

export default MobileWrapper

const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  border: ${props => props.theme.border};
  border-radius: 20px;
  padding: 20px;
  background-color: ${props => props.theme.mobileBackgroundColor};
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

  @media (max-width: 768px) {
    height: 35px;
  }
`

const LeftSide = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  vertical-align: top;
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
