import React from "react"
import { FaGithub as GithubIcon } from "@react-icons/all-files/fa/FaGithub"
import { FiLink as LinkIcon } from "@react-icons/all-files/fi/FiLink"
import { RiNpmjsFill as NpmIcon } from "@react-icons/all-files/ri/RiNpmjsFill"
import { primary, quaternary } from "../../../styles/colors"

// Utils
import useFilterImage from "../../../utils/useFilterImage"

// Styled Components
import {
  WorkContainer,
  WorkWrapper,
  WorkTitle,
  Title,
  WorkPicture,
  Picture,
  WorkSkills,
  WorkSkillX,
  WorkBack,
  Arrow,
  WorkContent,
  WorkText,
  H2Title,
  Skills,
  Socials,
  SocialIcons,
  SocialLink,
  Challenges,
} from "./Work.styles"
import { Dot } from "../../../styles/GlobalStyles"
import { FormattedMessage } from "gatsby-plugin-intl"

//Types
type WorkTypes = {
  title: string
  stack: string[]
  link?: string
  repo: string
  description: string
  image: string
  challenges: string
  npm?: string
}

const Work: React.FC<WorkTypes> = ({
  title,
  stack,
  link,
  npm,
  repo,
  description,
  image,
  challenges,
}): JSX.Element => {
  return (
    <WorkContainer id="about">
      <WorkWrapper>
        <WorkTitle>
          <Title>
            <Dot />
            {title}
          </Title>
        </WorkTitle>
        <WorkContent>
          <WorkPicture>
            <Picture
              image={useFilterImage(image)}
              alt={title}
              colors={{
                primary: quaternary,
                secondary: quaternary,
                background: primary,
              }}
            />
          </WorkPicture>
          <WorkText>
            <p>{description}</p>
            <Socials>
              <SocialIcons>
                <SocialLink
                  href={repo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon />
                </SocialLink>
                {link && (
                  <SocialLink
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkIcon />
                  </SocialLink>
                )}
                {npm && (
                  <SocialLink
                    href={npm}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <NpmIcon style={{ fontSize: "2.3rem" }} />
                  </SocialLink>
                )}
              </SocialIcons>
            </Socials>
            <WorkSkills>
              <H2Title>
                <h2>Tech Stack:</h2>
              </H2Title>
              <Skills>
                {stack.map((data, key) => {
                  return <WorkSkillX key={key}>{data}</WorkSkillX>
                })}
              </Skills>

              <Challenges>
                <H2Title>
                  <h2>Challenges:</h2>
                </H2Title>
                <ul>
                  <FormattedMessage
                    id={challenges}
                    values={{
                      li: (...chunks) => <li>{chunks}</li>,
                    }}
                  />
                </ul>
              </Challenges>
            </WorkSkills>
            <div style={{ width: "60px" }}>
              <WorkBack to="/">
                <Arrow />
                Back
                <div />
              </WorkBack>
            </div>
          </WorkText>
        </WorkContent>
      </WorkWrapper>
    </WorkContainer>
  )
}

export default Work
