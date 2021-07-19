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
  SkillsTitle,
  Skills,
  Socials,
  SocialIcons,
  SocialLink,
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
}

const Work: React.FC<WorkTypes> = ({
  title,
  stack,
  link,
  repo,
  description,
  image,
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
            <WorkSkills>
              <SkillsTitle>
                <h2>Tech Stack:</h2>
              </SkillsTitle>
              <Skills>
                {stack.map((data, key) => {
                  return <WorkSkillX key={key}>{data}</WorkSkillX>
                })}
              </Skills>
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
