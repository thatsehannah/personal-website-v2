import React, { useEffect, useState } from "react"
import styled from "styled-components"
import MainButton from "../../components/buttons/MainButton"
import { H1 } from "../../styles/TextStyles"
import axios from "axios"
import Letter from "../../components/special/Letter"
import { fadeInAnimation } from "../../styles/FadeInAnimation"

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [errors, setErrors] = useState({ name: "", email: "", message: "" })
  const [toast, setToast] = useState({
    show: false,
    message: "",
    backgroundColor: "",
  })

  useEffect(() => {
    if (toast.show) {
      const timer = setTimeout(() => {
        setToast({ show: false, message: "", backgroundColor: "" })
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [toast.show])

  const resetFormData = () => {
    setFormData({ name: "", email: "", message: "" })
    setErrors({ name: "", email: "", message: "" })
  }

  const handleInputChange = event => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
    validateInput(event.target.name, event.target.value)
  }

  const validateInput = (input, value) => {
    let err = ""
    switch (input) {
      case "name":
        if (!value.trim()) {
          err = "Please provide a name."
        }
        break
      case "email":
        const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
        if (!emailRegex.test(value)) {
          err = "Please provide a valid email address."
        }
        break
      case "message":
        if (!value.trim()) {
          err = "Please provide a message."
        }
        break
      default:
        break
    }

    setErrors(prevErrors => ({ ...prevErrors, [input]: err }))
  }

  const checkIsFormValid = () => {
    return (
      formData.name === "" ||
      formData.message === "" ||
      formData.email === "" ||
      errors.email !== ""
    )
  }

  const handleSubmit = async event => {
    event.preventDefault()

    try {
      const res = await axios.post(
        process.env.GATSBY_FIREBASE_FUNCTION_URL,
        formData
      )

      if (res.data.isEmailSend) {
        setToast({
          show: true,
          message: `Thanks! A response was sent to ${formData.email}`,
          backgroundColor: "rgba(80, 200, 120, 0.8)",
        })
      } else {
        setToast({
          show: true,
          message: "An error occurred sending your message.",
          backgroundColor: "rgba(196, 30, 58, 0.8)",
        })
      }
    } catch (error) {
      setToast({
        show: true,
        message: `There was an error sending the message: ${error}`,
        backgroundColor: "rgba(196, 30, 58, 0.8)",
      })
      console.error("There was an error sending the message: ", error)
    } finally {
      resetFormData()
    }
  }

  return (
    <Wrapper>
      <ContentWrapper>
        <Toast show={toast.show} backgroundColor={toast.backgroundColor}>
          {toast.message}
        </Toast>
        <TitleWrapper>
          <TopWrapper>
            <Memoji src="/images/memojis/hero-memoji.png" />
            <EmojiSpan>➕</EmojiSpan>
            <EmojiSpan>🫵</EmojiSpan>
          </TopWrapper>
          <Title>
            Let's chop it up. Send m<Letter /> a message...
          </Title>
        </TitleWrapper>

        <Form>
          <InputWrapper>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onBlur={() => validateInput("name", formData.name)}
              onChange={handleInputChange}
            />
            <ErrorWrapper>
              {errors.name && <ErrorText>{errors.name}</ErrorText>}
            </ErrorWrapper>
          </InputWrapper>

          <InputWrapper>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onBlur={() => validateInput("email", formData.email)}
              onChange={handleInputChange}
            />
            <ErrorWrapper>
              {errors.email && <ErrorText>{errors.email}</ErrorText>}
            </ErrorWrapper>
          </InputWrapper>

          <InputWrapper>
            <Label htmlFor="message">Message</Label>
            <MessageInput
              id="message"
              type="text"
              name="message"
              value={formData.message}
              onBlur={() => validateInput("message", formData.message)}
              onChange={handleInputChange}
            />
            <ErrorWrapper>
              {errors.message && <ErrorText>{errors.message}</ErrorText>}
            </ErrorWrapper>
          </InputWrapper>

          <ButtonWrapper>
            <MainButton
              onClick={handleSubmit}
              type="submit"
              text="Send message"
              disabled={checkIsFormValid()}
            />
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

  @media (max-width: 768px) {
    padding: 0px 20px 100px;
  }
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1400px;
  /* margin: 0 auto; */
  gap: 60px;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`

const Toast = styled.div`
  position: fixed;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${props => props.backgroundColor};
  color: #fff;
  padding: 16px;
  border-radius: 4px;
  z-index: 8;
  opacity: ${props => (props.show ? "1" : "0")};
  transition: opacity 0.5s ease;
`

const TopWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 48px;
  overflow: hidden;

  @media (max-width: 768px) {
    justify-content: center;
  }
`

const TitleWrapper = styled.div`
  display: grid;
  gap: 10px;
`

const Memoji = styled.img`
  display: flex;
  position: relative;
  left: -38px;
  height: 240px;

  @media (max-width: 768px) {
    height: 180px;
  }
`

const EmojiSpan = styled.span`
  font-size: 5rem;
  position: relative;
  left: -76px;

  @media (max-width: 768px) {
    font-size: 4rem;
  }
`

const Title = styled(H1)`
  font-size: 3.5rem;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`

const Form = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 0 auto;
  ${fadeInAnimation}
`

const InputWrapper = styled.div`
  display: grid;
  gap: 12px;
  width: 100%;
  margin-bottom: 50px;
`

const Label = styled.label`
  font-size: 1.5rem;
  font-weight: 600;
`

const Input = styled.input`
  font-size: 1.2rem;
  width: 90%;
  padding: 10px;
  height: 30px;
  border: 1.5px solid rgb(0, 147, 233);
  border-radius: 8px;

  &:focus {
    outline: 5px solid #80d0c7;
    border: none;
  }
`

const MessageInput = styled.textarea`
  font-size: 1.2rem;
  width: 90%;
  padding: 10px;
  height: 150px;
  border: 1.5px solid rgb(0, 147, 233);
  border-radius: 8px;

  &:focus {
    outline: 5px solid #80d0c7;
    border: none;
  }
`

const ErrorWrapper = styled.div`
  height: 16px;
`

const ErrorText = styled.p`
  color: red;
  margin: 0;
`

const ButtonWrapper = styled.div`
  display: grid;
  justify-content: left;
`
