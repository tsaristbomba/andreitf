import React from "react"
import { graphql } from "gatsby"

// Components
import Post from "../components/PagesComponents/Post"

// Types
type BlogTemplateTypes = {
  data: {
    blog: {
      title: string
      slug: string
      author: string
      createdAt: string
      updatedAt: string
      tags: string[]
      related: {
        slug: string
        title: string
        publishDate: string
      }[]
      childContentfulBlogPostDescriptionTextNode: {
        childMarkdownRemark: {
          html: string
        }
      }
      childContentfulBlogPostBodyTextNode: {
        childMarkdownRemark: {
          html: string
        }
      }
      heroImage: {
        gatsbyImageData: any
      }
    }
  }
}

const BlogPost: React.FC<BlogTemplateTypes> = ({ data }): JSX.Element => {
  //   const { blog } = data

  return (
    <>
      <Post {...data} />
    </>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query ($slug: String!, $node_locale: String!) {
    blog: contentfulBlogPost(
      slug: { eq: $slug }
      node_locale: { eq: $node_locale }
    ) {
      title
      slug
      author
      createdAt
      updatedAt
      tags
      related {
        slug
        title
        publishDate
      }
      childContentfulBlogPostDescriptionTextNode {
        childMarkdownRemark {
          html
        }
      }
      childContentfulBlogPostBodyTextNode {
        childMarkdownRemark {
          html
        }
      }
      heroImage {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
  }
`
