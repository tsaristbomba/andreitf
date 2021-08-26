import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import { useIntl } from "gatsby-plugin-intl"

// Components
import Post from "../components/PagesComponents/Post"
import getLocale from "../utils/getLocale"
import Seo from "../components/seo"

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
          seoImage: {
            fluid: {
              src: string
            }
          }
        }
      }[]
    }
  }
}
// interface FilterTypes {
//   node: {
//     title: string
//     slug: string
//     author: string
//     createdAt: string
//     node_locale: string
//     updatedAt: string
//     tags: string[]
//     related: {
//       slug: string
//       title: string
//       publishDate: string
//     }[]
//     childContentfulBlogPostDescriptionTextNode: {
//       childMarkdownRemark: {
//         html: string
//         rawMarkdownBody: string
//       }
//     }
//     childContentfulBlogPostBodyTextNode: {
//       childMarkdownRemark: {
//         html: string
//       }
//     }
//     heroImage: {
//       gatsbyImageData: any
//     }
//     seoImage: {
//       fluid: {
//         src: string
//       }
//     }
//   }
// }
// ;[]
interface StateTypes {
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
      rawMarkdownBody: string
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
  seoImage: {
    fluid: {
      src: string
    }
  }
}

const BlogPost = ({ data }: BlogTemplateTypes) => {
  const [post, setPost] = useState<StateTypes | null>(null)

  const intl = useIntl()

  useEffect(() => {
    const locale = getLocale(intl.locale)

    const filteredData: any = data.blog.edges.filter(
      item => item.node.node_locale === locale
    )

    setPost(filteredData[0].node)
  }, [])

  return (
    <>
      {post !== null && (
        <>
          <Seo
            title={post.title}
            lang={intl.locale}
            image={post.seoImage.fluid.src}
            description={
              post.childContentfulBlogPostDescriptionTextNode
                .childMarkdownRemark.rawMarkdownBody
            }
          />
          <Post {...post} />
        </>
      )}
    </>
  )
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
