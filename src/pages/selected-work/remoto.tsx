import { navigate } from "gatsby"
import React, { useEffect, useState } from "react"

// Components
import Layout from "../../components/layout"
import SelectedWork from "../../components/PagesComponents/SelectedWork"
import Seo from "../../components/seo"
import Loading from "../../components/common/loading"
import { useIntl } from "gatsby-plugin-intl"

// Types
type WorkPageTypes = {
  location: {
    state: {
      title: string
      page: string
      stack: string[]
      link?: string
      npm?: string
      repo: string
      description: string
      image: string
      challenges: string[]
    }
  }
}

const WorkPage: React.FC<WorkPageTypes> = ({ location }): JSX.Element => {
  const [data, setData] = useState(null)

  useEffect(() => {
    location.state === null && navigate("/")
  }, [])

  const intl = useIntl()

  useEffect(() => {
    const title = intl.formatMessage({ id: "page-5-title" })
    const page = intl.formatMessage({ id: "page-5-page" })
    const link = intl.formatMessage({ id: "page-5-link" })
    const repo = intl.formatMessage({ id: "page-5-repo" })
    const description = intl.formatMessage({ id: "page-5-description" })
    const image = intl.formatMessage({ id: "page-5-image" })
    const challenges = "page-5-challenges"
    const stack = [
      "Gatsby.js",
      "Typescript",
      "styled-components",
      "gatsby-plugin",
      "GraphQL",
    ]

    setData({
      title,
      page,
      link,
      repo,
      description,
      image,
      challenges,
      stack,
    })
  }, [])

  return (
    <Layout>
      <Seo title={location.state === null ? "" : location.state.title} />
      {data !== null ? (
        <SelectedWork {...data} />
      ) : (
        <div
          style={{ minHeight: "calc(100vh - 120px)", background: "#2D2D2D" }}
        >
          <Loading />
        </div>
      )}
    </Layout>
  )
}

export default WorkPage
