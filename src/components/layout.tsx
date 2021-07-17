import React, { useState, useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

// Components
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Sidebar from "../components/Sidebar"
import GlobalStyle from "../styles/GlobalStyles"

// Types
type LayoutTypes = {
  home: boolean
}

const Layout: React.FC<LayoutTypes> = ({ children, home }): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)

  // initiate animate on scroll
  useEffect(() => {
    AOS.init({ duration: 600 })
  })
  //

  // open/close mobile menu
  function handleMenu() {
    setIsOpen(!isOpen)
  }
  //

  return (
    <>
      <GlobalStyle />
      <Sidebar handleMenu={handleMenu} isOpen={isOpen} />
      <Navbar handleMenu={handleMenu} home={home} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
