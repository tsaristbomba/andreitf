import React from "react"

import Error from "../components/404"
import Seo from "../components/seo"
import GlobalStyles from "../styles/GlobalStyles"

const NotFoundPage: React.FC = () => (
  <>
    <GlobalStyles />
    <Seo title="404: Not found" />
    <Error />
  </>
)

export default NotFoundPage
