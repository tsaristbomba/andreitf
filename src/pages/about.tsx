import React from "react"
import { MdEmail } from "@react-icons/all-files/md/MdEmail"
// import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter"
import { FaGithub } from "@react-icons/all-files/fa/FaGithub"
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn"

// Components
import Layout from "../components/layout"
import Profile from "../components/PagesComponents/Profile"
import Seo from "../components/seo"
import { useIntl } from "gatsby-plugin-intl"

const AboutPage: React.FC = (): JSX.Element => {
  const profileObj = {
    alt: "Andrei's photo",
    text: (
      <div>
        <p>
          I was born and grew up in Brazil, in a small town at the exact center
          of Bahia state. My experience with computers started when my parents,
          both high school teachers, needed a computer to work. They bought a
          white IBM Windows 98 PC, which I played games and learned a lot from,
          enjoyed every second of it. Knowing that I would end up working in
          tech wasn't a stretch 😉.
        </p>
        <p>
          As time passes I started to study Computer Engineering to after find
          out that coding itself is what suits me more, so I made the change to
          Computer Science. In the meantime I was learning Web Development and
          started making games and websites for fun, to later decide to do this
          professionally, and here I am 🖐️.
        </p>
        <p>
          My other big passions are Music, Crypto and Games. As described
          before, I started coding building games as well as websites, and to
          this day gaming is a big passion of mine.
        </p>
      </div>
    ),
    skillX: [
      "Javascript",
      "Typescript",
      "React.js",
      "Gatsby.js",
      "styled-components",
      "CSS",
      "Tailwind",
    ],
    skill: ["Next.js", "Node.js", "GraphQL", "Webpack"],
    socials: [
      {
        name: "Github",
        icon: <FaGithub />,
        href: "https://github.com/vorsakha",
      },
      {
        name: "Linkedin",
        icon: <FaLinkedinIn />,
        href: "https://www.linkedin.com/in/andreitf/",
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

  const intl = useIntl()

  return (
    <Layout>
      <Seo title="About" lang={intl.locale} />
      <Profile {...profileObj} />
    </Layout>
  )
}

export default AboutPage
