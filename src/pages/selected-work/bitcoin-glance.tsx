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
    const title = intl.formatMessage({ id: "page-1-title" })
    const page = intl.formatMessage({ id: "page-1-page" })
    const link = intl.formatMessage({ id: "page-1-link" })
    const repo = intl.formatMessage({ id: "page-1-repo" })
    const description = intl.formatMessage({ id: "page-1-description" })
    const image = intl.formatMessage({ id: "page-1-image" })
    const challenges = "page-1-challenges"
    const stack = [
      "React.js",
      "Typescript",
      "Binance API",
      "styled-components",
      "PWA",
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
      <Seo title="Bitcoin Glance" lang={intl.locale} />
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
