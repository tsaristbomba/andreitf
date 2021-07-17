import React, { useState, useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { FaBars } from "@react-icons/all-files/fa/FaBars"
import { graphql, Link, useStaticQuery } from "gatsby"

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
import { quaternary } from "../../styles/colors"

// Types
type HeroTypes = {
  socials: {
    href: string
    name: string
    icon: JSX.Element
  }[]
}

const Hero: React.FC<HeroTypes> = ({ socials }): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)

  // initiate animate on scroll
  useEffect(() => {
    AOS.init({ duration: 600 })
  })
  //

  // open/close mobile menu
  function handleMenu() {
    setIsOpen(!isOpen)
  }
  //

  const data = useStaticQuery(graphql`
    {
      image: allFile(
        filter: { name: { regex: "/(home-pic)/" }, ext: { regex: "/(jpg)/" } }
      ) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
      text: allDataJson {
        edges {
          node {
            name
            description
          }
        }
      }
      portfolio: allPortfolioJson {
        edges {
          node {
            title
            githubLink
            stack
            link
            description
            imgSrc {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  `)

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
      <HeroWrapper data-aos="fade-up">
        <HeroContent>
          <HeroH1>{data.text.edges[0].node.name}</HeroH1>
          <HeroP>{data.text.edges[0].node.description}</HeroP>
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
          {data.portfolio.edges.map((item, key) => {
            return (
              <ul key={key}>
                <li>
                  <Link to="#">{item.node.title}</Link>
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
