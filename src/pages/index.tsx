import React from "react"

import Hero from "../components/Hero"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { profileObj } from "../data/profile"
// import GlobalStyles from "../styles/GlobalStyles"

const IndexPage: React.FC = () => (
  <Layout home={false}>
    <SEO title="Home" />
    <Hero {...profileObj} />
  </Layout>
)

export default IndexPage
