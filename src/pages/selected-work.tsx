import React from "react"

// Components
import Layout from "../components/layout"
import SelectedWork from "../components/PagesComponents/SelectedWork"
import Seo from "../components/seo"

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
    }
  }
}

const WorkPage: React.FC<WorkPageTypes> = ({ location }): JSX.Element => {
  return (
    <Layout>
      <Seo title={location.state.title} />
      <SelectedWork {...location.state} />
    </Layout>
  )
}

export default WorkPage
