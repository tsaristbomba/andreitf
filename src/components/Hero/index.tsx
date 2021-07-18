import React, { useState } from "react"
import { FaBars } from "@react-icons/all-files/fa/FaBars"
import { Link } from "gatsby"

// tyled Components
import {
  HeroContainer,
  HeroWrapper,
  HeroContent,
  HeroP,
  HeroH1,
  Socials,
  SocialLink,
  MobileIcon,
  HeroH2,
} from "./Hero.styles"
import Sidebar from "../Sidebar"

// Types
type HeroTypes = {
  socials: {
    href: string
    name: string
    icon: JSX.Element
  }[]
}

const Hero: React.FC<HeroTypes> = ({ socials }): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  // open/close mobile menu
  function handleMenu() {
    setIsOpen(!isOpen)
  }
  //

  const portfolio = [
    {
      title: "Bitcoin Glance",
      page: "bitcoin-glance",
      stack: ["Webpack", "Typescript", "Binance API", "CSS"],
      link: "https://www.bitcoinglance.cc/",
      repo: "https://github.com/tsaristbomba/bitcoin-glance",
      description:
        "Bitcoin Glance calculates Bitcoin market history to get a glance at the current conditions, depending on specific time frames.",
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
      repo: "https://github.com/tsaristbomba/beast-modal",
      description:
        "A Gatsby plugin for easy modal display with gatsby-plugin-image.",
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
      ],
      repo: "https://github.com/tsaristbomba/portfolio-gatsby",
      link: "https://telfer.io",
      description: "Portfolio and Blog for myself and by myself.",
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
      repo: "https://github.com/tsaristbomba/untilt",
      link: "https://untilt-bug-tracker.netlify.app/",
      description:
        "Untilt is an app that let you log bugs and assign them to a registered member. Once a bug is resolved, a member can mark it as such. Every member have a section of their assigned bugs and other with all bugs as well.",
    },
    {
      title: "Sakha Blog Starter",
      page: "blog-sakha",
      stack: ["Gatsby.js", "Tailwindcss", "styled-components", "NetlifyCMS"],
      repo: "https://github.com/tsaristbomba/gatsby-blog-sakha",
      link: "https://sakha-blog.netlify.app/",
      description: "Gatsbyjs blog starter template.",
    },
    {
      title: "3D Criativa",
      page: "3d-criativa",
      stack: ["React.js", "styled-components", "Responsive Design"],
      repo: "https://github.com/tsaristbomba/3dcriativa-v2",
      description:
        "Website for 3DCriativa, a São Paulo based company. Built with React.js.",
    },
  ]

  return (
    <HeroContainer id="home">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Inter&family=Nunito&display=swap');
      </style>
      <Sidebar handleMenu={handleMenu} isOpen={isOpen} />
      <MobileIcon onClick={handleMenu}>
        <FaBars />
      </MobileIcon>
      <HeroWrapper>
        <HeroContent>
          <HeroH1>Andrei T. Ferreira</HeroH1>
          <HeroP>Dev / Learner / JAMStack enthusiast</HeroP>
          <Socials>
            {socials.map((data, key) => {
              return (
                <SocialLink
                  key={key}
                  href={data.href}
                  aria-label={data.name}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {data.icon}
                </SocialLink>
              )
            })}
          </Socials>
        </HeroContent>
        <HeroContent start>
          <HeroH2>Selected Work</HeroH2>
          {portfolio.map((item, key) => {
            return (
              <ul key={key}>
                <li>
                  <Link state={item} to={`/selected-work`}>
                    {item.title}
                  </Link>
                </li>
              </ul>
            )
          })}
        </HeroContent>
      </HeroWrapper>
    </HeroContainer>
  )
}

export default Hero
