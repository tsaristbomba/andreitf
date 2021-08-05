import React from "react"
import { FaGithub as GithubIcon } from "@react-icons/all-files/fa/FaGithub"
import { FiLink as LinkIcon } from "@react-icons/all-files/fi/FiLink"
import { primary, quaternary, secondary } from "../../../styles/colors"

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

//Types
type WorkTypes = {
  title: string
  stack: string[]
  link?: string
  repo: string
  description: string
  image: string
  challenges: string[]
}

const Work: React.FC<WorkTypes> = ({
  title,
  stack,
  link,
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
                secondary: secondary,
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
                  {challenges.map((c, key) => (
                    <li key={key}>{c}</li>
                  ))}
                </ul>
              </Challenges>
            </WorkSkills>
            <WorkBack to="/">
              <Arrow />
              Back
              <div />
            </WorkBack>
          </WorkText>
        </WorkContent>
      </WorkWrapper>
    </WorkContainer>
  )
}

export default Work
