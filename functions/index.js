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

    const myEmailOptions = {
      from: gmailEmail,
      to: "echannah631@gmail.com",
      subject: "Somebody just messaged you from your new site",
      html: `<p style="font-size: 16px">From: ${name}</p>
             <p style="font-size: 16px">Email: ${email}</p>
             <p style="font-size: 16px">Message: ${message}</p>
            `,
    }

    const mailOptions = {
      from: gmailEmail,
      to: email,
      subject: "Thank you for your message",
      html: `<p style="font-size: 16px">Hey ${name},</p>
             <p style="font-size: 16px">Thank you for visiting my new site! I worked very hard on every aspect of it to showcase my true talents and passions. I hope you were impressed with everything and were able to learn something about me. Building this site was a personal goal of mine and achieving this goal is a huge milestone for me. If you are a recruiter or hiring manager, I hope my site serves as insight to my coding abilities as well as to my personality and it propels me to becoming a potential team member to your organization.</p>
             <p style="font-size: 16px">I appreciate your message and will respond at my earliest convenience. If you have any inquiries, please feel free to reach out via my email <a href="mailto:elliotchannah@outlook.com">elliotchannah@outlook.com</a>. Again, thank you and I hope you have a blessed day!</p>
             <p style="font-size: 16px;">Sincerely,</p>
             <br/>
             <p style="font-size: 16px;">Elliot C. Hannah III</p>
             <p style="font-size: 12px; margin-top: -10px;">Full Stack Engineer</p>
             <hr />
             <p style="font-size: 12px;"><strong>Phone: </strong><a href="tel:7066317005">(706) 631-7005</a></p>
             <p style="font-size: 12px; margin-top: -5px;"><strong>Email: </strong><a href="mailto:elliotchannah@outlook.com">elliotchannah@outlook.com</a></p>
             <p style="font-size: 12px; margin-top: -5px;"><strong>Website: </strong><a href="https://thatsehannah.com">thatsehannah.com</a></p>
            `,
    }

    return mailTransport
      .sendMail(mailOptions)
      .then(() => {
        console.log("Email sent to: ", email)
        mailTransport.sendMail(myEmailOptions).then(() => {
          console.log("New email sent to echannah631@gmail.com")
        })
        res.status(200).send({ isEmailSend: true })
      })
      .catch(err => {
        console.error("There was an error sending the email: ", err)
        res.status(500).send({ isEmailSend: false, error: err })
      })
  })
})

const collections = [
  "aboutMe",
  "certificates",
  "education",
  "projects",
  "skills",
  "stats",
  "strengths",
  "work",
]

collections.forEach(collection => {
  exports[`${collection}Trigger`] = functions.firestore
    .document(`${collection}/{docId}`)
    .onWrite(async (_, __) => {
      const res = await fetch(process.env.VERCEL_BUILD_HOOK, { method: "POST" })

      if (res.ok) {
        console.log("Build triggered successfully.")
      } else {
        console.log("Failed to trigger build:", res.statusText)
      }
    })
})
