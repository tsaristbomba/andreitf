import React from "react"
import BlogArchive from "../components/PagesComponents/BlogArchive"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { useIntl } from "gatsby-plugin-intl"

const BlogPage: React.FC = (): JSX.Element => {
  const intl = useIntl()

  return (
    <Layout>
      <Seo title="Blog" lang={intl.locale} />
      <BlogArchive />
    </Layout>
  )
}

export default BlogPage
