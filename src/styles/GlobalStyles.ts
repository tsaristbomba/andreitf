import styled, { createGlobalStyle, keyframes } from "styled-components"
import { ImSpinner2 } from "@react-icons/all-files/im/ImSpinner2"
import { primary, quaternary, quinary, tertiary, senary } from "./colors"
import { GoPrimitiveDot } from "@react-icons/all-files/go/GoPrimitiveDot"

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: "Inter", "Nunito", sans-serif;
        line-height: 1.7rem;
        font-weight: 300;
    }

    p, button, a {
        font-family: "Nunito", "Inter", sans-serif;
    }

    a {
        color: #fff;
        font-weight: 300;
        text-shadow: ${senary} 0px 4px 18px, ${senary} 0px 2px 10px;
        
        
        :hover {
            color: ${quaternary};
        text-shadow: ${quinary} 0px 4px 18px, ${quinary} 0px 2px 10px;
        }
    }

    ::selection {
        background: ${tertiary}
    }

    mark {
        background: ${quaternary};
        padding: 4px;
        color: ${primary}
    }

    ul {
    list-style: none;
  }

  li {
    display: flex;
    align-items: center;
  }

  ul li::before {
    content: "•";
    color: ${quaternary};
    text-shadow: ${quinary} 0px 4px 18px, ${quinary} 0px 2px 10px;
    display: inline-block;
    width: 1.5rem;
    font-size: 1.5rem;
  }
`

const spin = keyframes`
    100% {
        transform: rotate(360deg);
    }
    
`

export const Spinner = styled(ImSpinner2)`
  position: absolute;
  top: 45%;
  left: 45%;
  color: ${tertiary};
  font-size: 2rem;
  animation: ${spin} 2s linear infinite;
`
export const Dot = styled(GoPrimitiveDot)`
  color: ${quaternary};
  filter: drop-shadow(0px 2px 6px rgba(255, 24, 76, 0.8));
`

export default GlobalStyles
