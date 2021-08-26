import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import { useIntl } from "gatsby-plugin-intl"

// Components
import Post from "../components/PagesComponents/Post"
import getLocale from "../utils/getLocale"

// Types
type BlogTemplateTypes = {
  data: {
    blog: {
      edges: {
        node: {
          title: string
          slug: string
          author: string
          createdAt: string
          node_locale: string
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
      }[]
    }
  }
}

const BlogPost: React.FC<BlogTemplateTypes> = ({ data }): JSX.Element => {
  const [post, setPost] = useState(null)

  const intl = useIntl()

  useEffect(() => {
    const locale = getLocale(intl.locale)

    const filteredData = data.blog.edges.filter(
      item => item.node.node_locale === locale
    )

    setPost(filteredData[0].node)
  }, [])

  return <>{post !== null && <Post {...post} />}</>
}

export default BlogPost

export const pageQuery = graphql`
  query ($slug: String!) {
    blog: allContentfulBlogPost(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          title
          node_locale
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
              rawMarkdownBody
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
          seoImage: heroImage {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`
