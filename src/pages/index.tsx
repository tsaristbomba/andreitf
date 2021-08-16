import React from "react"
import { MdEmail } from "@react-icons/all-files/md/MdEmail"
// import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter"
import { FaGithub } from "@react-icons/all-files/fa/FaGithub"
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn"

import Hero from "../components/PagesComponents/Hero"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage: React.FC = (): JSX.Element => {
  const profileObj = {
    alt: "Andrei's photo",
    text: [
      "I was born and grew up in Brazil, in a small town at the exact center of the great Bahia state. My experience with computers started when my parents, both hight school teachers, needed a computer to work. They bought a white IBM Windows 98 PC, which I played games and learned a lot from, enjoyed every second of it. Knowing that I would end up working with tech wasn't a stretch.",
      "As time passes I started to study Computer Engineering to after find out that coding itself is what suits me more, so I make the change to Computer Science. In the meantime I learned the basics of Web Development and started making games and websites for fun, to later decide to do this professionally, and here I am. ",
      "My other big passions are Music, Crypto and Games. As I described before, I started coding building games as well as websites, and until this day gaming is a big passion of mine. While working I listen a lot of music, and this are some of my favorite Playlists.",
    ],
    skillX: [
      "React.js",
      "Gatsby.js",
      "styled-components",
      "API",
      "CSS3",
      "Responsive Design",
    ],
    skill: ["Node.js", "Material-UI", "Bootstrap", "GraphQL"],
    contact:
      "I don't realy tweet but if you like, you can DM me. Or you can just email me:",
    socials: [
      {
        name: "Github",
        icon: <FaGithub />,
        href: "https://github.com/vorsakha",
      },
      {
        name: "Linkedin",
        icon: <FaLinkedinIn />,
        href: "#",
      },
      {
        name: "Email",
        icon: <MdEmail />,
        href: "mailto:andreitf.dev@gmail.com",
      },
      // {
      //   name: "Twitter",
      //   icon: <FaTwitter />,
      //   href: "https://twitter.com/vorsakha",
      // },
    ],
  }

  const portfolio = [
    {
      title: "Bitcoin Glance",
      page: "bitcoin-glance",
      stack: ["Webpack", "Typescript", "Binance API", "CSS", "PWA"],
    },
    {
      title: "Save a Class",
      page: "save-a-class",
      stack: ["Nextjs", "MongoDB", "Tailwindcss", "Typescript"],
    },
    {
      title: "Untilt - Bug Tracker",
      page: "untilt",
      stack: [
        "React.js",
        "Typescript",
        "Tailwindcss",
        "Redux",
        "Express",
        "Axios",
        "MongoDB",
      ],
    },
    {
      title: "Beast Modal",
      page: "gatsby-plugin-beast-modal",
      stack: [
        "Gatsby.js",
        "Typescript",
        "styled-components",
        "gatsby-plugin",
        "GraphQL",
      ],
    },
    {
      title: "andreitf.co",
      page: "andreitf",
      stack: [
        "Gatsby.js",
        "Typescript",
        "styled-components",
        "GraphQL",
        "ContentfulCMS",
        "PWA",
      ],
    },
  ]

  return (
    <Layout>
      <Seo title="Home" />
      <Hero {...profileObj} portfolio={portfolio} />
    </Layout>
  )
}

export default IndexPage
