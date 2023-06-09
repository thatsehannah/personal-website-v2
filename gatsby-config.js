require("dotenv").config()
const firebaseKey = JSON.parse(process.env.FIREBASE_KEY)

module.exports = {
  siteMetadata: {
    title: `E. Hannah`,
    description: `Elliot C. Hannah III's personal website - refreshed and revamped!`,
    author: `@thatsehannah`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-firestore-easy`,
      options: {
        adminCredential: {
          credential: firebaseKey,
          databaseURL: process.env.FIREBASE_DATABASE_URL,
        },
        collections: [
          {
            collection: "aboutMe",
            type: "AboutMe",
          },
          {
            collection: "skills",
            type: "Skills",
          },
          {
            collection: "stats",
            type: "Stats",
            orderBy: [["order", "asc"]],
          },
          {
            collection: "strengths",
            type: "StrengthData",
            orderBy: [["rank", "asc"]],
          },
          {
            collection: "work",
            type: "WorkData",
            orderBy: [["end", "desc"]],
          },
          {
            collection: "certificates",
            type: "CertificateData",
            orderBy: [["issueDate", "desc"]],
          },
          {
            collection: "projects",
            type: "ProjectData",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ehannah-personal-site`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/icons/apple-touch-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
