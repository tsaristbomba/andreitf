import React from "react"
import { MdEmail } from "@react-icons/all-files/md/MdEmail"
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter"
import { FaGithub } from "@react-icons/all-files/fa/FaGithub"

// Components
import Layout from "../components/layout"
import Profile from "../components/Profile"
import Seo from "../components/seo"

const AboutPage: React.FC = (): JSX.Element => {
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
        name: "Twitter",
        icon: <FaTwitter />,
        href: "https://twitter.com/andreitelfer",
      },
      {
        name: "Email",
        icon: <MdEmail />,
        href: "mailto:andreitelfer@gmail.com",
      },
      {
        name: "Github",
        icon: <FaGithub />,
        href: "https://github.com/tsaristbomba",
      },
    ],
  }

  return (
    <Layout>
      <Seo title="About" />
      <Profile {...profileObj} />
    </Layout>
  )
}

export default AboutPage
