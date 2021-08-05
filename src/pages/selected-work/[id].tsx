import { navigate } from "gatsby"
import React, { useEffect } from "react"

// Components
import Layout from "../../components/layout"
import SelectedWork from "../../components/PagesComponents/SelectedWork"
import Seo from "../../components/seo"
import Loading from "../../components/common/loading"

// Types
type WorkPageTypes = {
  location: {
    state: {
      title: string
      page: string
      stack: string[]
      link?: string
      repo: string
      description: string
      image: string
      challenges: string[]
    }
  }
}

const WorkPage: React.FC<WorkPageTypes> = ({ location }): JSX.Element => {
  useEffect(() => {
    location.state === null && navigate("/")
  }, [])

  return (
    <Layout>
      <Seo title={location.state === null ? "" : location.state.title} />
      {location.state !== null ? (
        <SelectedWork {...location.state} />
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
