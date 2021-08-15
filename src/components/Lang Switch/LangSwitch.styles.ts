import styled from "styled-components"
import { GiBrazilFlag } from "@react-icons/all-files/gi/GiBrazilFlag"
import { FaFlagUsa } from "@react-icons/all-files/fa/FaFlagUsa"
import { quaternary, quinary, secondary, senary } from "../../styles/colors"

export const LangWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`
export const LangBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
  transition: all 0.2s ease;
  color: ${secondary};
  font-size: 14px;

  filter: drop-shadow(0px 2px 6px ${senary});

  :hover {
    color: ${quaternary};

    svg {
      color: ${quaternary};
    }
    filter: drop-shadow(0px 2px 6px ${quinary});
  }
`
export const IconEn = styled(FaFlagUsa)`
  transition: all 0.2s ease;
  width: 40px;

  color: ${secondary};
  font-size: 1.5rem;
`
export const IconPt = styled(GiBrazilFlag)`
  transition: all 0.2s ease;
  width: 45px;

  color: ${secondary};
  font-size: 2.5rem;
`
