import React from "react"
import { MdEmail } from "@react-icons/all-files/md/MdEmail"
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter"
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
        href: "mailto:andreitelfer@gmail.com",
      },
      {
        name: "Twitter",
        icon: <FaTwitter />,
        href: "https://twitter.com/vorsakha",
      },
    ],
  }

  const portfolio = [
    {
      title: "Bitcoin Glance",
      page: "bitcoin-glance",
      stack: ["Webpack", "Typescript", "Binance API", "CSS", "PWA"],
      link: "https://www.bitcoinglance.cc/",
      repo: "https://github.com/vorsakha/bitcoin-glance",
      description:
        "Bitcoin Glance calculates Bitcoin market history to get a glance at the current conditions, depending on specific time frames.",
      image: "bg",
    },
    {
      title: "gatsby-plugin-beast-modal",
      page: "beast-modal",
      stack: [
        "Gatsby.js",
        "Typescript",
        "styled-components",
        "gatsby-plugin",
        "GraphQL",
      ],
      repo: "https://github.com/vorsakha/beast-modal",
      description:
        "A Gatsby plugin for easy modal display with gatsby-plugin-image. It is used in the example image on this page.",
      image: "default",
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
      repo: "https://github.com/vorsakha/portfolio-gatsby",
      link: "https://telfer.io",
      description: "Portfolio and Blog for myself and by myself.",
      image: "TF",
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
      repo: "https://github.com/vorsakha/untilt",
      link: "https://untilt-bug-tracker.netlify.app/",
      description:
        "Untilt is an app that let you log bugs and assign them to a registered member. Once a bug is resolved, a member can mark it as such. Every member have a section of their assigned bugs and other with all bugs as well.",
      image: "untilt",
    },
    {
      title: "Sakha Blog Starter",
      page: "blog-sakha",
      stack: [
        "Gatsby.js",
        "Tailwindcss",
        "styled-components",
        "PWA",
        "NetlifyCMS",
      ],
      repo: "https://github.com/vorsakha/gatsby-blog-sakha",
      link: "https://sakha-blog.netlify.app/",
      description: "Gatsbyjs blog starter template.",
      image: "sakha-blog",
    },
    {
      title: "3D Criativa",
      page: "3d-criativa",
      stack: ["React.js", "styled-components", "Responsive Design"],
      repo: "https://github.com/vorsakha/3dcriativa-v2",
      description:
        "Website for 3DCriativa, a São Paulo based company. Built with React.js.",
      image: "3d",
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
