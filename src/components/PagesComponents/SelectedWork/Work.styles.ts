import styled from "styled-components"
import {
  primary,
  quaternary,
  secondary,
  senary,
  tertiary,
} from "../../../styles/colors"
import { Link } from "gatsby-plugin-intl"
import { IoReturnUpBackSharp } from "@react-icons/all-files/io5/IoReturnUpBackSharp"
import { ModalImage } from "@tsaristbomba/gatsby-plugin-beast-modal"

export const WorkContainer = styled.div`
  background: ${primary};
  color: ${secondary};
  min-height: calc(100vh - 120px);
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    height: auto;
    margin: 0;
  }
`
export const WorkWrapper = styled.div`
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
export const WorkTitle = styled.div`
  width: 100%;
  color: ${secondary};
  margin-bottom: 1rem;
`
export const Title = styled.h1`
  font-size: 1.4rem;
  display: flex;
  align-items: center;
`
export const WorkContent = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`
export const WorkPicture = styled.div`
  width: 40%;
  /* height: 100%; */
  margin: 1rem 1rem 0 0;
  border-radius: 8px;
  position: relative;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0;
    margin-top: 1rem;
  }
`
export const Picture = styled(ModalImage)`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`
export const WorkText = styled.div`
  width: 60%;
  margin-top: 1rem;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`
export const WorkSkills = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
`
export const H2Title = styled.div`
  color: ${secondary};
  margin: 1rem 0;

  h2 {
    font-size: 1.2rem;
  }
`
export const Skills = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
export const WorkSkillX = styled.div`
  margin-right: 4px;
  margin-top: 8px;
  background: ${quaternary};
  color: ${secondary};
  margin-right: 8px;
  padding: 4px 6px;
  border-radius: 8px;
  box-shadow: rgba(255, 24, 76, 0.4) 0px 3px 18px;
`
export const Socials = styled.div`
  margin-top: 2rem;
`
export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
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

export const Arrow = styled(IoReturnUpBackSharp)`
  font-size: 18px;
  display: flex;
  align-items: center;
  margin-bottom: -8px;
  color: ${quaternary};
  filter: drop-shadow(0px 2px 6px rgba(255, 24, 76, 0.6));
`
export const WorkBack = styled(Link)`
  color: ${tertiary};
  text-shadow: none;
  font-size: 13.33px;
  cursor: pointer;
  text-decoration: none;
`
export const Challenges = styled.div`
  margin: 2rem 0;
`
