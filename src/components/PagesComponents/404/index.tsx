import React from "react"
import Typewriter from "typewriter-effect"

// Styled Components
import {
  ErrorContainer,
  ErrorWrapper,
  ErrorH1,
  ErrorP,
  Button,
  NavLogo,
  LogoSpan,
} from "./Error.styles"

const Error: React.FC = (): JSX.Element => {
  return (
    <ErrorContainer>
      <ErrorWrapper>
        <NavLogo to="/">
          <span>T</span>
          <LogoSpan>F</LogoSpan>
        </NavLogo>
        <ErrorH1>
          <Typewriter
            options={{
              strings: ["404: Not found."],
              autoStart: true,
              // pauseFor: 15000000,
              loop: true,
              delay: 40,
              deleteSpeed: 35,
            }}
          />
        </ErrorH1>
        <ErrorP>
          The page you're trying to visit <strong>does not exist</strong>
        </ErrorP>
        <Button to="/">Get me out!</Button>
      </ErrorWrapper>
    </ErrorContainer>
  )
}

export default Error
