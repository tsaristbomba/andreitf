import React, { useState, useEffect } from "react"

// Components
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Sidebar from "../components/Sidebar"
import GlobalStyle from "../styles/GlobalStyles"
import ScrollButton from "./ScrollButton"

// Types
type LayoutTypes = {
  home?: boolean
}

const Layout: React.FC<LayoutTypes> = ({ children, home }): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  // open/close mobile menu
  function handleMenu() {
    setIsOpen(!isOpen)
  }
  //

  return (
    <>
      <GlobalStyle />
      <ScrollButton />
      <Sidebar handleMenu={handleMenu} isOpen={isOpen} />
      <Navbar handleMenu={handleMenu} home={home} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
