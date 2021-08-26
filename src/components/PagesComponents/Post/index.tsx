import { Link, useIntl } from "gatsby-plugin-intl"
import React from "react"

// Components
import { Dot } from "../../../styles/GlobalStyles"
import Layout from "../../layout"
import ScrollButton from "../../ScrollButton"
import Seo from "../../seo"
import {
  PostContainer,
  PostHero,
  PostWrapper,
  PostBack,
  Arrow,
  PostTitle,
  PostSub,
  PostAuthor,
  PostDate,
  PostBody,
  PostRelated,
} from "./Post.styles"

// Types
type BlogTemplateTypes = {
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
      rawMarkdownBody: string
    }
  }
  childContentfulBlogPostBodyTextNode: {
    childMarkdownRemark: {
      html: string
    }
  }
  heroImage: {
    gatsbyImageData:
      | {
          images: {
            fallback: {
              src: string
            }
          }
        }
      | any
  }
}

const Post: React.FC<BlogTemplateTypes> = (props): JSX.Element => {
  function formatDate(rawDate) {
    const dateObj = new Date(rawDate)
    const month =
      dateObj.getUTCMonth() + 1 <= 9
        ? "0" + (dateObj.getUTCMonth() + 1)
        : dateObj.getUTCMonth() + 1
    const day =
      dateObj.getUTCDate() <= 9
        ? "0" + dateObj.getUTCDate()
        : dateObj.getUTCDate()
    const year = dateObj.getUTCFullYear()
    const date = year + "-" + month + "-" + day

    return date
  }

  const intl = useIntl()

  // const seoDescription =
  //   props.childContentfulBlogPostDescriptionTextNode.childMarkdownRemark
  //     .rawMarkdownBody
  // const seoImage = props.heroImage.gatsbyImageData.images.fallback.src
  const seoDescription = props.title

  return (
    <Layout>
      <ScrollButton />
      <PostContainer>
        <PostHero
          loading="eager"
          image={props.heroImage.gatsbyImageData}
          alt={props.title}
        />
        <PostWrapper>
          <PostBack to="/blog">
            <Arrow />
            Blogs
            <div />
          </PostBack>
          <PostTitle>
            <Dot />
            {props.title}
          </PostTitle>
          <PostSub>
            <PostAuthor href="https://github.com/vorsakha" target="_blank">
              {props.author}
              <div />
            </PostAuthor>
            <PostDate>
              {formatDate(props.createdAt) === formatDate(props.updatedAt)
                ? formatDate(props.createdAt)
                : `Updated at ${formatDate(props.updatedAt)}`}
              {/* {props.tags !== null ? (
                <span>Topics: {props.tags.join(", ")}</span>
              ) : (
                <></>
              )} */}
            </PostDate>
          </PostSub>
          <PostBody
            dangerouslySetInnerHTML={{
              __html:
                props.childContentfulBlogPostBodyTextNode.childMarkdownRemark
                  .html,
            }}
          />
          {props.related !== null ? (
            <PostRelated>
              <h2>Related Posts</h2>
              <ul>
                {props.related.map(post => (
                  <li>
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    <span>{formatDate(post.publishDate)}</span>
                  </li>
                ))}
              </ul>
            </PostRelated>
          ) : (
            <></>
          )}
        </PostWrapper>
      </PostContainer>
    </Layout>
  )
}

export default Post
