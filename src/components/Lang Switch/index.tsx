import React from "react"
import { changeLocale, useIntl } from "gatsby-plugin-intl"
import { LangBtn, LangWrapper } from "./LangSwitch.styles"

const LangSwitch = () => {
  const intl = useIntl()

  return (
    <LangWrapper>
      {intl.locale === "en" ? (
        <LangBtn onClick={() => changeLocale("pt")}>
          <span>PT-BR</span>

          {/* <IconPt /> */}
        </LangBtn>
      ) : (
        <LangBtn onClick={() => changeLocale("en")}>
          <span>EN</span>

          {/* <IconEn /> */}
        </LangBtn>
      )}
    </LangWrapper>
  )
}

export default LangSwitch
