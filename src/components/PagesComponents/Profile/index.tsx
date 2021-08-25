import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import useSocial from "../../../utils/useSocial"
import { getImage } from "gatsby-plugin-image"
import { FormattedMessage } from "gatsby-plugin-intl"

// Styled Components
import {
  ProfileContainer,
  ProfileWrapper,
  ProfileTitle,
  Title,
  ProfilePicture,
  Picture,
  ProfileText,
  ProfileSkills,
  ProfileSkillX,
  ProfileSkill,
  ProfileContent,
  SkillsTitle,
  Skills,
  Socials,
  SocialIcons,
  SocialLink,
} from "./Profile.styles"
import { Dot } from "../../../styles/GlobalStyles"

//Types
type ProfileTypes = {
  alt: string
  skillX: string[]
  skill: string[]
  socials: {
    href: string
    name: string
    icon: JSX.Element
  }[]
  text: JSX.Element
}

const Profile: React.FC<ProfileTypes> = ({
  alt,
  skillX,
  skill,
  socials,
  text,
}): JSX.Element => {
  const data = useStaticQuery(graphql`
    {
      image: allFile(
        filter: {
          name: { regex: "/(profile-picture)/" }
          ext: { regex: "/(jpg)/" }
        }
      ) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(transformOptions: { grayscale: true })
            }
          }
        }
      }
    }
  `)

  const image = getImage(data.image.edges[0].node)

  return (
    <ProfileContainer id="about">
      <ProfileWrapper>
        <ProfileTitle>
          <Title>
            <Dot />
            <FormattedMessage id="profile-title" />
          </Title>
        </ProfileTitle>
        <ProfileContent>
          <ProfilePicture>
            <Picture loading="eager" image={image} alt={alt} />
          </ProfilePicture>
          <ProfileText>
            <FormattedMessage
              id="profile-text"
              values={{
                p: (...chunks) => <p>{chunks}</p>,
              }}
            />
            <ProfileSkills>
              <SkillsTitle>
                <Title>
                  <FormattedMessage id="profile-skills-title" />
                </Title>
              </SkillsTitle>
              <Skills>
                {skillX.map((data, key) => {
                  return <ProfileSkillX key={key}>{data}</ProfileSkillX>
                })}
                {skill.map((data, key) => {
                  return <ProfileSkill key={key}>{data}</ProfileSkill>
                })}
              </Skills>
              <Socials>
                <SkillsTitle>
                  <Title>
                    <FormattedMessage id="profile-contact-title" />
                  </Title>
                </SkillsTitle>
                <SocialIcons>
                  {socials.map((data, key) => {
                    return (
                      <SocialLink
                        key={key}
                        href={data.href}
                        aria-label={data.name}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {useSocial(data)}
                      </SocialLink>
                    )
                  })}
                </SocialIcons>
              </Socials>
            </ProfileSkills>
          </ProfileText>
        </ProfileContent>
      </ProfileWrapper>
    </ProfileContainer>
  )
}

export default Profile
