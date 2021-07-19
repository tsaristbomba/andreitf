import React from "react"
import BlogArchive from "../components/PagesComponents/BlogArchive"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPage: React.FC = (): JSX.Element => {
  return (
    <Layout>
      <Seo title="Blog" />
      <BlogArchive />
    </Layout>
  )
}

export default BlogPage
