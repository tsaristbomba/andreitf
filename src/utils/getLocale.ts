const getLocale = arg => {
  let locale: string

  switch (arg) {
    case "en":
      locale = "en-US"
      break

    case "pt":
      locale = "pt-BR"
      break
    default:
      break
  }

  return locale
}

export default getLocale
