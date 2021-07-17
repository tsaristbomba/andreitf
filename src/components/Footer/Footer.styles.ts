import styled from "styled-components"
import { BiCodeAlt } from "@react-icons/all-files/bi/BiCodeAlt"
import { primary, secondary } from "../../styles/colors"

export const FooterContainer = styled.div`
  background: ${primary};
  font-size: 12px;
`
export const FooterWrapper = styled.div`
  padding: 24px;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: 120px;
    justify-content: center;
  }
`
export const FooterRights = styled.div`
  color: ${secondary};
  text-align: center;
`
export const FooterMaker = styled.div`
  color: ${secondary};
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    font-size: 12px;
    margin-top: 8px;
  }
`
export const CodeIcon = styled(BiCodeAlt)`
  font-size: 16px;
  margin-right: 6px;
  color: ${secondary};

  @media screen and (max-width: 768px) {
    font-size: 14px;
    margin-right: 4px;
  }
`
export const FooterAnchor = styled.a`
  margin-left: 4px;
  text-decoration: none;
  border-bottom: none;
`
