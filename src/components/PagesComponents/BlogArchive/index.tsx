import React, { useEffect, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import {
  ArchiveContainer,
  PostHero,
  ArchiveWrapper,
  ArchiveTitle,
  ArchiveList,
  PostItem,
  Column1,
  Column2,
  PostLink,
  PostDescription,
  PostDate,
} from "./Archive.styles"
import { Dot } from "../../../styles/GlobalStyles"
import { useIntl } from "gatsby-plugin-intl"

const BlogArchive: React.FC = (): JSX.Element => {
  const [intlData, setData] = useState(null)

  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: createdAt, order: DESC }) {
        edges {
          node {
            childContentfulBlogPostDescriptionTextNode {
              childMarkdownRemark {
                html
              }
            }
            slug
            node_locale
            title
            createdAt
            heroImage {
              gatsbyImageData
            }
          }
        }
      }
    }
  `)

  const intl = useIntl()

  useEffect(() => {
    let locale: string

    switch (intl.locale) {
      case "en":
        locale = "en-US"
        break

      case "pt":
        locale = "pt-BR"
        break
      default:
        break
    }

    const filteredData = data.allContentfulBlogPost.edges.filter(
      item => item.node.node_locale === locale
    )

    setData(filteredData)
  }, [])

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
    <ArchiveContainer>
      <ArchiveWrapper>
        <ArchiveTitle>
          <Dot />
          Blog Archive
        </ArchiveTitle>
        <ArchiveList>
          {intlData?.map((item, key) => {
            return (
              <PostItem key={key}>
                <Column1>
                  <PostLink to={`/blog/${item.node.slug}`}>
                    <PostHero
                      image={item.node.heroImage.gatsbyImageData}
                      alt={item.node.title}
                    />
                  </PostLink>
                </Column1>
                <Column2>
                  <PostLink to={`/blog/${item.node.slug}`}>
                    {item.node.title}
                  </PostLink>
                  <PostDate>{formatDate(item.node.createdAt)}</PostDate>
                  <PostDescription
                    dangerouslySetInnerHTML={{
                      __html:
                        item.node.childContentfulBlogPostDescriptionTextNode
                          .childMarkdownRemark.html,
                    }}
                  />
                </Column2>
              </PostItem>
            )
          })}
        </ArchiveList>
      </ArchiveWrapper>
    </ArchiveContainer>
  )
}

export default BlogArchive
