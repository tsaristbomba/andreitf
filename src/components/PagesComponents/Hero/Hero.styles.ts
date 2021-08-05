import styled from "styled-components"
import {
  primary,
  quaternary,
  secondary,
  tertiary,
  senary,
  quinary,
} from "../../../styles/colors"

// Types
type HeroStyledTypes = {
  start?: boolean
}

export const HeroContainer = styled.div`
  height: calc(100vh - 120px);
  background: ${primary};
  overflow: hidden;
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

  li {
    display: flex;
    margin-bottom: 10px;
  }

  @media screen and (max-width: 768px) {
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

export const HeroP = styled.p`
  color: ${tertiary};
  text-align: start;
  padding: 12px 1rem;
  font-size: 1rem;
  font-weight: 300;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`
export const HeroH1 = styled.h1`
  color: ${quaternary};
  text-align: center;
  padding: 12px 1rem;
  border-radius: 8px;
  font-size: 3.5rem;
  display: flex;
  text-align: start;
  font-weight: bold;
  text-transform: uppercase;
  line-height: 55px;
  margin-bottom: -8px;
  font-weight: 300;
  text-shadow: ${quinary} 0px 4px 18px, ${quinary} 0px 2px 10px;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
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

  @media screen and (max-width: 768px) {
    align-self: center;
  }
  /* @media screen and (max-width: 340px) {
    text-align: center;
  } */
`

export const Socials = styled.div`
  display: flex;
  padding: 12px 1rem;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
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

export const Tech = styled.div`
  /* margin-right: 4px; */
  /* margin-top: 8px; */
  background: ${quaternary};
  color: ${secondary};
  margin-left: 8px;
  padding: 0 4px;
  border-radius: 8px;
  box-shadow: rgba(255, 24, 76, 0.4) 0px 3px 18px;
  font-size: 12px;
`
