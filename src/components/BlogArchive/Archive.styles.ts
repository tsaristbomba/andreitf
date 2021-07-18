import styled from "styled-components"
import { GatsbyImage as Img } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { primary, secondary, tertiary } from "../../styles/colors"

export const ArchiveContainer = styled.div`
  background: ${primary};
  min-height: calc(100vh - 160px);
  color: ${secondary};
`
export const PostHero = styled(Img)`
  height: 250px;
  object-fit: cover;
  filter: grayscale(100%);
  border-radius: 8px;
  transition: 0.2s opacity ease;

  &:hover {
    opacity: 0.7;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
  @media screen and (max-width: 480px) {
    height: 200px;
  }
`
export const ArchiveWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 24px 24px 0 24px;

  /* @media screen and (max-width: 480px) {
    padding: 24px;
  } */
`
export const ArchiveTitle = styled.h2`
  font-size: 18px;
  color: ${secondary};
  display: flex;
  align-items: center;
`
export const ArchiveList = styled.div`
  padding: 0 0 2rem 0;
`
export const PostItem = styled.div`
  display: grid;
  max-width: 1150px;
  width: 100%;
  grid-auto-columns: minmax(49%, 1fr);
  grid-template-areas: "col1 col2";
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
  grid-gap: 1rem;

  @media screen and (max-width: 768px) {
    grid-template-areas: "col1" "col2";
    margin: 1rem 0;
    grid-gap: 0.2rem;
  }
`
export const Column1 = styled.div`
  grid-area: col1;
`
export const Column2 = styled.div`
  grid-area: col2;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`
export const PostLink = styled(Link)`
  border-bottom: none;
  transition: all 0.2s ease;
  font-size: 1.6rem;
`
export const PostDescription = styled.div`
  margin: 1rem 0;
  color: ${tertiary};

  @media screen and (max-width: 768px) {
    margin-bottom: 2rem;
  }
`
export const PostDate = styled.small`
  color: ${tertiary};
  font-style: italic;
  width: 100%;
  margin-top: 4px;
`
