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
      link: "https://www.bitcoinglance.cc/",
      repo: "https://github.com/vorsakha/bitcoin-glance",
      description:
        "Bitcoin Glance calculates Bitcoin market history to get a glance at the current conditions, depending on specific time frames.",
      image: "bg",
      challenges: [
        "Translated a indicator strategy to code by calculating data coming from Binance API according to the indicator specifications.",
        "Worked more closely with Webpack and respective config file",
      ],
    },
    {
      title: "Save a Class",
      page: "save-a-class",
      stack: ["Nextjs", "MongoDB", "Tailwindcss", "Typescript"],
      repo: "https://github.com/vorsakha/saveaclass",
      description:
        "Nextjs App that grabs COD MW(2019) match history data and allow user to save a specific match class.",
      image: "sac",
      challenges: [
        "NextApiRequest - I had to find out how to merge some more types to the NextApiRequest for a piece of code that required it in strict typescript.",
        "localStorage - had to write checks to localStorage availability due to server side rendering of nextjs Window, and document are not available on the server. This is why you'll run into these types of errors if you are trying to access window properties or document. In my case, I was persisting my authentication token to localStorage on the previous application. To avoid running into these undefined errors at compile and build time, you can run a simple check.",
        'Font change tailwind - The "extend" functionality allows you to add your font(s) alongside the existing font utilities. Add a theme.extend.fontFamily section to the Tailwind config',
        'Type safety with extraReducers - Was getting an error regarding putting a promise inside a redux state. Resolved it by searching through the redux toolkit documentation and correctly making "action" type safe.',
        "non-serializable value was detected in the state Was passing aixos whole result, that apart from data, it contains various other fields related to the request. Although i'm only saving data and not other fields, as the whole res object passes to the store it goes through a middleware called Serializability, which is included in redux-toolkit and enforces Redux recommendation to only store serializable data. Serializable means it can be written down as text and converted back to original object without losing information, which doesn't work with functions. A javascript function apart from code also have scope (memory associated to it), which cannot be represented as text. Serializability checks the whole payload (it is executed before your data reaches the store, so it doesn't know which parts will be used) and notices config. As config has methods among its members Serializability alerts you that it is not serializable. You could switch the middleware off, but it can detect genuine issues, so it's generally a better idea to just keep only relevant data in the payload.",
      ],
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
      challenges: [
        "Learned how to work with Redux-Toolkit",
        "Alert system with Redux",
        "Nodejs and Express with Typescript",
        "Dynamic routes with Gatsbyjs",
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
      repo: "https://github.com/vorsakha/beast-modal",
      description:
        "A Gatsby plugin for easy modal display with gatsby-plugin-image. It is used in the example image on this page.",
      image: "default",
      challenges: [
        "Learned how to build a Gatsby plugin",
        "Refactored to use the new official gatsby-image-plugin",
        "Refactored to Typescript, deepening my knowledge on the language",
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
      repo: "https://github.com/vorsakha/portfolio-gatsby",
      link: "https://telfer.io",
      description: "Portfolio and Blog.",
      image: "TF",
      challenges: [
        "Got more experience working with ContentfulCMS API",
        "Learned how to make an PWA App",
      ],
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
      challenges: [
        "Got more experience working with NetlifyCMS API",
        "NetlifyCMS generate blog posts with markdown, a different approach from ContentfulCMS, so I had to work in a different way to generate those pages based on markdown",
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
