import styled from "styled-components"
import {
  primary,
  quaternary,
  secondary,
  senary,
  tertiary,
} from "../../../styles/colors"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

export const ProfileContainer = styled.div`
  background: ${primary};
  min-height: calc(100vh - 120px);
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    height: auto;
    margin: 0;
  }
`
export const ProfileWrapper = styled.div`
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 24px;

  @media screen and (max-width: 768px) {
    margin: 0;
  }
`
export const ProfileTitle = styled.div`
  width: 100%;
  color: ${secondary};
  margin-bottom: 1rem;
`
export const Title = styled.h3`
  font-size: 1.4rem;
  display: flex;
  align-items: center;
`
export const ProfileContent = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`
export const ProfilePicture = styled.div`
  width: 40%;
  height: 100%;
  margin: 1rem 1rem 0 0;
  border-radius: 8px;
  position: relative;
  overflow: hidden;

  @media screen and (max-width: 480px) {
    min-height: 480px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0;
    margin-top: 1rem;
  }
`
export const Picture = styled(GatsbyImage)`
  width: 100%;
  border-radius: 8px;
`
export const ProfileText = styled.div`
  width: 60%;
  margin-top: 1rem;
  color: ${secondary};

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`
export const ProfileAnchor = styled.a`
  text-decoration: none;
  border-bottom: 2px solid ${quaternary};
  transition: all 0.2s ease;
`
export const ProfileLink = styled(Link)`
  text-decoration: none;
  border-bottom: 2px solid ${quaternary};
  transition: all 0.2s ease;
`
export const ProfileSkills = styled.div`
  margin-top: 2rem;
`
export const SkillsTitle = styled.div`
  color: ${secondary};
`
export const Skills = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
export const ProfileSkillX = styled.div`
  margin-right: 4px;
  margin-top: 8px;
  background: ${quaternary};
  color: ${secondary};
  margin-right: 8px;
  padding: 4px 6px;
  border-radius: 8px;
  box-shadow: rgba(255, 24, 76, 0.4) 0px 3px 18px;
`
export const ProfileSkill = styled.div`
  margin-top: 8px;
  margin-right: 4px;
  background: ${tertiary};
  color: ${primary};
  margin-right: 8px;
  padding: 4px 6px;
  border-radius: 8px;
`
export const Socials = styled.div`
  margin-top: 2rem;
`
export const SocialIcons = styled.div`
  display: flex;
  width: 100%;
  margin: 1rem 0;
`
export const SocialLink = styled.a`
  font-size: 2rem;
  margin-right: 1rem;
  transition: all 0.2s ease;
  border-bottom: none;

  filter: drop-shadow(0px 2px 6px ${senary});

  :hover {
    filter: drop-shadow(0px 2px 6px rgba(255, 24, 76, 0.5));
  }
`
