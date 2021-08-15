import styled from "styled-components"
import { FaTimes } from "@react-icons/all-files/fa/FaTimes"
import { Link } from "gatsby-plugin-intl"
import { primary, quaternary, secondary, tertiary } from "../../styles/colors"

// Types
type SidebarStyledTypes = {
  handleMenu?: () => void
  $isOpen?: boolean
}

export const SidebarContainer = styled.div`
  position: fixed;
  z-index: 1000;
  width: 100%;
  height: 100%;
  background: ${primary};
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  opacity: ${(props: SidebarStyledTypes) => (props.$isOpen ? "100%" : "0")};
  top: ${({ $isOpen }) => ($isOpen ? "0" : "-100%")};
  transition: 0.2s ease-in-out;
`
export const IconWrapper = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`
export const CloseIcon = styled(FaTimes)`
  color: ${quaternary};
  filter: drop-shadow(0px 2px 6px rgba(255, 24, 76, 0.8));
`
export const SidebarMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 60px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(2, 80px);
  }
`
export const SidebarHashLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  color: ${secondary};
  letter-spacing: 1.1px;
  transition: 0.2s ease-in-out;
  text-shadow: none;
  border-bottom: none;

  &:hover {
    color: ${tertiary};
  }
`
