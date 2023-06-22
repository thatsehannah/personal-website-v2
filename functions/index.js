const functions = require("firebase-functions")
const nodemailer = require("nodemailer")
const cors = require("cors")({ origin: true })

const gmailEmail = functions.config().gmail.email
const gmailPassword = functions.config().gmail.password

const mailTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
  secure: true,
})

exports.sendMail = functions.https.onRequest((req, res) => {
  res.set("Access-Control-Allow-Origin", "*")
  res.set("Access-Control-Allow-Credentials", "true")
  res.set("Access-Control-Allow-Methods", "GET, PUT, POST, OPTIONS")
  res.set("Access-Control-Allow-Headers", "*")

  if (req.method === "OPTIONS") {
    res.end()
    return
  }

  cors(req, res, () => {
    if (req.method !== "POST") {
      return
    }

    if (!req.body) {
      res.status(400).send("No data received")
      return
    }

    const { name, email, message } = req.body

    const mailOptions = {
      from: gmailEmail,
      to: email,
      subject: "Thank you for your message",
      text: `Hi ${name}, thank you for reaching out! I've received your message: ${message}`,
    }

    return mailTransport
      .sendMail(mailOptions)
      .then(() => {
        console.log("Email sent to: ", email)
        res.status(200).send({ isEmailSend: true })
      })
      .catch(err => {
        console.error("There was an error sending the email: ", err)
        res.status(500).send({ isEmailSend: false, error: err })
      })
  })
})
