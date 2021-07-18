import styled from "styled-components"
import {
  primary,
  quaternary,
  quinary,
  secondary,
  tertiary,
} from "../../styles/colors"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

// Types
type HeroStyledTypes = {
  start?: boolean
}

export const HeroContainer = styled.div`
  height: calc(100vh - 140px);
  background: ${primary};
  overflow: hidden;

  @media screen and (max-width: 768px) {
    height: calc(100vh - 180px);
  }
`
export const HeroWrapper = styled.div`
  display: grid;
  grid-auto-columns: 48% 48%;
  grid-template-areas: "col1 col2";
  grid-gap: 1rem;
  max-width: 1150px;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-top: -80px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    grid-auto-columns: 98%;
    grid-template-areas: "col1" "col2";
  }
`
export const HeroContent = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 48px;
  overflow: hidden;
  letter-spacing: 0.15em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: start;

  @media screen and (max-width: 480px) {
    padding: 24px;
    text-align: ${(props: HeroStyledTypes) =>
      props.start ? "start" : "center"};

    ul {
      align-self: center;
    }
    li {
      display: flex;
    }
  }
`
export const ImageContainer = styled.div`
  /* width: 200px; */
  margin: 0 auto;
  width: 208px;
  height: 208px;
  border-radius: 50%;
  border: 4px solid ${quaternary};
  box-shadow: 0px 4px 8px rgba(255, 24, 76, 0.6);
`
export const Image = styled(GatsbyImage)`
  margin: 0 auto;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  filter: grayscale(100%);

  img {
    margin: 0 auto;
  }
`
export const HeroP = styled.p`
  color: ${tertiary};
  text-align: start;
  padding: 12px 1rem;
  font-size: 1rem;
  font-weight: 300;

  @media screen and (max-width: 480px) {
    text-align: center;
  }
`
export const HeroH1 = styled.h1`
  color: ${secondary};
  text-align: center;
  padding: 12px 1rem;
  border-radius: 8px;
  font-size: 3rem;
  display: flex;
  text-align: start;
  font-weight: bold;
  text-transform: uppercase;
  line-height: 45px;
  margin-bottom: -8px;
  font-weight: 300;

  @media screen and (max-width: 480px) {
    font-size: 2.8rem;
    line-height: 40px;
    text-align: center;
  }
  @media screen and (max-width: 340px) {
    font-size: 2rem;
  }
`
export const HeroH2 = styled.h2`
  color: ${secondary};
  text-align: center;
  font-size: 1.5rem;
  display: flex;
  text-align: start;
  font-weight: bold;
  line-height: 64px;
  font-weight: 300;

  @media screen and (max-width: 480px) {
    align-self: center;
  }
  /* @media screen and (max-width: 340px) {
    text-align: center;
  } */
`
export const Button = styled(Link)`
  color: ${secondary};
  padding: 5px;
  display: flex;
  justify-content: center;
  text-decoration: none;
  background: transparent;
  transition: all 0.2s ease;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0.5rem 0;
  border-bottom: 2px solid ${secondary};

  &:hover {
    color: ${tertiary};
    border-bottom: 2px solid ${tertiary};
  }
`
export const Socials = styled.div`
  display: flex;
  /* margin: 0 auto 1rem auto; */
  filter: drop-shadow(0px 2px 6px rgba(255, 24, 76, 0.5));
  padding: 12px 1rem;

  @media screen and (max-width: 480px) {
    justify-content: center;
  }
`
export const SocialLink = styled.a`
  color: ${quaternary};
  font-size: 2rem;
  margin-right: 1rem;
  transition: all 0.2s ease;
  border-bottom: none;
`
export const HeroMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const HeroItem = styled.li`
  height: 80px;
`

export const HeroLink = styled(Link)`
  color: ${secondary};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1.5rem;
  height: 100%;
  cursor: pointer;
  border-top: 3px solid transparent;
  border-bottom: 3px solid transparent;
  letter-spacing: 1.1px;
  transition: 0.2s ease;
  text-shadow: none;
  font-weight: bold;

  &:hover {
    color: ${quaternary};
    text-shadow: ${quinary} 0px 4px 18px, ${quinary} 0px 2px 10px;
  }
`
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 80%);
    font-size: 1.8rem;
    cursor: pointer;
    color: ${quaternary};
    filter: drop-shadow(0px 2px 6px rgba(255, 24, 76, 0.8));
  }
`
