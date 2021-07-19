import styled from "styled-components"
import { Link } from "gatsby"
import { primary, quaternary, secondary, quinary } from "../../../styles/colors"

export const ErrorContainer = styled.div`
  height: 100vh;
  background: ${primary};
`
export const ErrorWrapper = styled.div`
  max-width: 1150px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
`
export const ErrorH1 = styled.h1`
  color: ${primary};
  max-width: 550px;
  text-align: center;
  margin: 0 auto;
  background: ${secondary};
  padding: 12px 1rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  margin: 0.5rem 0;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px,
    rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px,
    rgba(0, 0, 0, 0.07) 0px 16px 16px;
`
export const ErrorP = styled.p`
  color: ${secondary};
  margin: 1rem 0;
`
export const Button = styled(Link)`
  /* color: ${secondary}; */
  padding-bottom: 0.5px;
  font-size: 25px;
  display: flex;
  justify-content: center;
  /* text-decoration: none; */
  background: transparent;
  /* border-bottom: 3px solid ${quaternary}; */
  text-transform: uppercase;
  font-weight: bold;
  margin: 0.5rem 0;
`
export const NavLogo = styled(Link)`
  font-size: 3rem;
  padding: 10px;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  font-weight: bold;
  border-bottom: none;
  margin-bottom: 1rem;
  color: ${quaternary};
  text-shadow: ${quinary} 0px 4px 18px, ${quinary} 0px 2px 10px;
`
export const LogoSpan = styled.span`
  margin-left: -5px;
`
