import React from "react"
import LangSwitch from "../LangSwitch"

// Styled Components
import {
  SidebarContainer,
  IconWrapper,
  CloseIcon,
  SidebarMenu,
  SidebarHashLink,
  BtnWrapper,
} from "./Sidebar.styles"

// Types
type SidebarTypes = {
  handleMenu: () => void
  isOpen: boolean
}

const Sidebar: React.FC<SidebarTypes> = ({
  handleMenu,
  isOpen,
}): JSX.Element => {
  return (
    <SidebarContainer $isOpen={isOpen}>
      <IconWrapper onClick={handleMenu}>
        <CloseIcon />
      </IconWrapper>
      <SidebarMenu>
        <SidebarHashLink onClick={handleMenu} to="/about/">
          About
        </SidebarHashLink>
        <SidebarHashLink onClick={handleMenu} to="/blog/">
          Blog
        </SidebarHashLink>
        <SidebarHashLink onClick={handleMenu} to="/blog/">
          <BtnWrapper>
            <LangSwitch />
          </BtnWrapper>
        </SidebarHashLink>
      </SidebarMenu>
    </SidebarContainer>
  )
}

export default Sidebar
