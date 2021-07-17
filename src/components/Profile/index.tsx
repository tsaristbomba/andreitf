import React, { ReactInstance } from "react"
import { graphql, useStaticQuery } from "gatsby"

// Styled Components
import {
  ProfileContainer,
  ProfileWrapper,
  ProfileTitle,
  Title,
  ProfilePicture,
  Picture,
  ProfileText,
  ProfileP,
  MarkdownText,
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
import { Dot } from "../../styles/GlobalStyles"
import { getImage } from "gatsby-plugin-image"

//Types
type ProfileTypes = {
  alt: string
  skillX: string[]
  skill: string[]
  socials: {
    href: string
    name: string
    icon: ReactInstance
  }[]
  contact: string
}

const Profile: React.FC<ProfileTypes> = ({
  alt,
  skillX,
  skill,
  socials,
  contact,
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
              gatsbyImageData
            }
          }
        }
      }
      markdown: allFile(filter: { name: { regex: "/(profile-text)/" } }) {
        edges {
          node {
            childrenMarkdownRemark {
              html
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
            About
          </Title>
        </ProfileTitle>
        <ProfileContent>
          <ProfilePicture data-aos="fade-right">
            <Picture loading="eager" image={image} alt={alt} />
          </ProfilePicture>
          <ProfileText data-aos="fade-up">
            <MarkdownText
              dangerouslySetInnerHTML={{
                __html:
                  data.markdown.edges[0].node.childrenMarkdownRemark[0].html,
              }}
            />
            <ProfileSkills>
              <SkillsTitle>
                <Title>My Skills:</Title>
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
                  <Title>Contact:</Title>
                </SkillsTitle>
                <ProfileP>{contact}</ProfileP>
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
                        {data.icon}
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
