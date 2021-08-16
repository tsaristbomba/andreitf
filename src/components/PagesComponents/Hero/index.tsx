import React from "react"
import { FormattedMessage, Link } from "gatsby-plugin-intl"

// tyled Components
import {
  HeroContainer,
  HeroWrapper,
  HeroContent,
  HeroP,
  HeroH1,
  Socials,
  SocialLink,
  HeroH2,
  Tech,
} from "./Hero.styles"

// Types
type HeroTypes = {
  socials: {
    href: string
    name: string
    icon: JSX.Element
  }[]
  portfolio: {
    title: string
    page: string
    stack: string[]
  }[]
}

const Hero: React.FC<HeroTypes> = ({ socials, portfolio }): JSX.Element => {
  return (
    <HeroContainer id="home">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Inter&family=Nunito&display=swap');
      </style>
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
          <HeroH2>
            <FormattedMessage id="hero-title" />
          </HeroH2>
          <ul>
            {portfolio.map((item, key) => {
              return (
                <li key={key}>
                  <Link state={item} to={`/selected-work/${item.page}`}>
                    {item.title}
                  </Link>
                  <Tech>{item.stack[0]}</Tech>
                </li>
              )
            })}
          </ul>
        </HeroContent>
      </HeroWrapper>
    </HeroContainer>
  )
}

export default Hero
