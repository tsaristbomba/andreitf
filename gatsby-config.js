require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Blog Starter`,
    seoTitle: `Blog Starter`,
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.`,
    siteUrl: "https://sakha-blog.netlify.app/",
    author: {
      name: "Lorem Ipsum Dolor",
      picture: "author.jpg", // image name from src/images
      alt: "Author picture",
    },
    socials: {
      // Social links
      instagram: "https://www.instagram.com",
      facebook: "https://www.facebook.com",
      twitter: "",
      linkedin: "",
      twitch: "",
      dev: "",
    },
    colors: {
      primary: "#663399",
      secondary: "#9ca3af",
      tertiary: "#fff",
      grayscale: false, // grayscale for all images
    },
  },
  flags: {
    PARALLEL_SOURCING: true,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-perf-budgets`,
    `gatsby-plugin-preact`,
    {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
      options: {
        devMode: false,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/templates`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
        accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
        downloadLocal: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `SakhaBlog`,
        short_name: `Sakha`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
}
