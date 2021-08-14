import { Link } from "gatsby-plugin-intl"
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

const Post: React.FC<BlogTemplateTypes> = ({ blog }): JSX.Element => {
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

  return (
    <Layout>
      <Seo title={blog.title} />
      <ScrollButton />
      <PostContainer>
        <PostHero
          loading="eager"
          image={blog.heroImage.gatsbyImageData}
          alt={blog.title}
        />
        <PostWrapper>
          <PostBack to="/blog">
            <Arrow />
            Blogs
            <div />
          </PostBack>
          <PostTitle>
            <Dot />
            {blog.title}
          </PostTitle>
          <PostSub>
            <PostAuthor href="https://github.com/vorsakha" target="_blank">
              {blog.author}
              <div />
            </PostAuthor>
            <PostDate>
              {formatDate(blog.createdAt) === formatDate(blog.updatedAt)
                ? formatDate(blog.createdAt)
                : `Updated at ${formatDate(blog.updatedAt)}`}
              {/* {blog.tags !== null ? (
                <span>Topics: {blog.tags.join(", ")}</span>
              ) : (
                <></>
              )} */}
            </PostDate>
          </PostSub>
          <PostBody
            dangerouslySetInnerHTML={{
              __html:
                blog.childContentfulBlogPostBodyTextNode.childMarkdownRemark
                  .html,
            }}
          />
          {blog.related !== null ? (
            <PostRelated>
              <h2>Related Posts</h2>
              <ul>
                {blog.related.map(post => (
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
