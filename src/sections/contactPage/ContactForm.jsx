import React, { useState } from "react"
import styled from "styled-components"
import MainButton from "../../components/buttons/MainButton"
import { H1, H2 } from "../../styles/TextStyles"

const ContactForm = () => {
  const [details, setDetails] = useState({ name: "", email: "", message: "" })

  const handleInputChange = event => {
    setDetails({ ...details, [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    // API call to server
  }

  return (
    <Wrapper>
      <ContentWrapper>
        <H1>Let's Connect!</H1>
        <Form onSubmit={handleSubmit}>
          <Label for="name">Name</Label>
          <Input
            id="name"
            type="text"
            name="name"
            onChange={handleInputChange}
          />
          <Label for="email">Email</Label>
          <Input
            id="email"
            type="email"
            name="email"
            onChange={handleInputChange}
          />
          <Label for="message">Message</Label>
          <MessageInput
            id="message"
            type="text"
            name="message"
            onChange={handleInputChange}
          />
          <ButtonWrapper>
            <MainButton type="submit" text="Submit" />
          </ButtonWrapper>
        </Form>
      </ContentWrapper>
    </Wrapper>
  )
}

export default ContactForm

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 20px;

  @media (max-width: 768px) {
    padding: 0px 20px 100px;
  }
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1300px;
  margin: 0 auto;
  gap: 60px;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`

const Form = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 0 auto;
`

const Label = styled.label`
  font-size: 1.5rem;
  margin-bottom: 12px;
`

const Input = styled.input`
  margin-bottom: 50px;
  width: 90%;
  padding: 10px;
  height: 30px;
  align-items: start;
`

const MessageInput = styled(Input)`
  height: 100px;
`

const ButtonWrapper = styled.div`
  display: grid;
  justify-content: left;
`
