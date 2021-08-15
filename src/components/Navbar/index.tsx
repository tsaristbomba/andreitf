import React from "react"
import { FaBars } from "@react-icons/all-files/fa/FaBars"

// Styled Components
import {
  Nav,
  NavbarContainer,
  NavLogo,
  LogoSpan,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
} from "./Navbar.styles"
import { quaternary, quinary } from "../../styles/colors"
import LangSwitch from "../Lang Switch"

// Types
type NavbarTypes = {
  handleMenu: () => void
  home?: boolean
}

const Navbar: React.FC<NavbarTypes> = ({ handleMenu, home }): JSX.Element => {
  return (
    <Nav home={home}>
      <NavbarContainer>
        <NavLogo to="/">
          <span>T</span>
          <LogoSpan>F</LogoSpan>
        </NavLogo>
        <MobileIcon onClick={handleMenu}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLink
              to="/about/"
              activeStyle={{
                color: quaternary,
                textShadow: `${quinary} 0px 4px 18px, ${quinary} 0px 2px 10px`,
              }}
            >
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="/blog/"
              activeStyle={{
                color: quaternary,
                textShadow: `${quinary} 0px 4px 18px, ${quinary} 0px 2px 10px`,
              }}
            >
              Blog
            </NavLink>
          </NavItem>
          <NavItem>
            <LangSwitch />
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar
