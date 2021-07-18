import styled from "styled-components"
import { Link } from "gatsby"
import { primary, quaternary, quinary, secondary } from "../../styles/colors"

// Types
type NavbarStyledTypes = {
  home?: boolean
}

export const Nav = styled.nav`
  background: ${primary};
  color: ${secondary};
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* position: sticky; */
  top: 0;
  z-index: 999;
  border-bottom: ${(props: NavbarStyledTypes) =>
    props.home ? "none" : "1px solid rgba(167, 167, 167, 0.1)"};
`
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding-left: 24px;
  max-width: 1100px;

  @media screen and (max-width: 768px) {
    padding-left: 24px;
    padding-right: 24px;
  }
  @media screen and (max-width: 480px) {
    padding-left: 24px;
  }
`
export const NavLogo = styled(Link)`
  font-size: 35px;
  padding: 10px;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  border-bottom: none;
  color: ${quaternary};
  text-shadow: ${quinary} 0px 4px 18px, ${quinary} 0px 2px 10px;
`
export const LogoSpan = styled.span`
  margin-left: -5px;
`
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 55%);
    font-size: 1.8rem;
    cursor: pointer;
    color: ${quaternary};
    filter: drop-shadow(0px 2px 6px rgba(255, 24, 76, 0.8));
  }
`
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  list-style: none !important;
  text-align: center;
  padding: 0;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const NavItem = styled.div`
  height: 60px;
`

export const NavLink = styled(Link)`
  color: ${secondary};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1.5rem;
  height: 100%;
  cursor: pointer;
  border-top: 3px solid transparent;
  border-bottom: 3px solid transparent;
  letter-spacing: 1.1px;
  transition: 0.2s ease;
  text-shadow: none;
  font-weight: 300;
`
