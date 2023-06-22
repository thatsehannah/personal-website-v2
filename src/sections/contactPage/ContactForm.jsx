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
    console.log(details)
    event.preventDefault()

    fetch("https://us-central1-thatsehannah.cloudfunctions.net/sendMail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(details),
    })
      .then(res => res.json())
      .then(data => {
        console.log("Success:", data)
      })
      .catch(err => {
        console.error("Error:", err)
      })
  }

  return (
    <Wrapper>
      <ContentWrapper>
        <H1>Let's Connect!</H1>
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            type="text"
            name="name"
            onChange={handleInputChange}
          />
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            name="email"
            onChange={handleInputChange}
          />
          <Label htmlFor="message">Message</Label>
          <MessageInput
            id="message"
            type="text"
            name="message"
            onChange={handleInputChange}
          />
          <ButtonWrapper>
            <button type="submit">Submit</button>
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
  width: 1400px;
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