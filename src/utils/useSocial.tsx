import React, { useEffect, useState } from "react"

// Icons
import { AiFillInstagram as InstagramIcon } from "@react-icons/all-files/ai/AiFillInstagram"
import { FaFacebookSquare as FacebookIcon } from "@react-icons/all-files/fa/FaFacebookSquare"
import { FaTwitterSquare as TwitterIcon } from "@react-icons/all-files/fa/FaTwitterSquare"
import { FaLinkedin as LinkedinIcon } from "@react-icons/all-files/fa/FaLinkedin"
import { FaTwitch as TwitchIcon } from "@react-icons/all-files/fa/FaTwitch"
import { SiDevDotTo as DevIcon } from "@react-icons/all-files/si/SiDevDotTo"
import { FaGithub } from "@react-icons/all-files/fa/FaGithub"
import { MdEmail } from "@react-icons/all-files/md/MdEmail"

interface SocialType {
  name: string
}

const useSocial = ({ name }: SocialType) => {
  const [jsx, setJsx] = useState(<div />)

  const normalizedName = name.toLowerCase()

  useEffect(() => {
    switch (normalizedName) {
      case "instagram":
        setJsx(<InstagramIcon />)
        break
      case "facebook":
        setJsx(<FacebookIcon />)
        break
      case "twitter":
        setJsx(<TwitterIcon />)
        break
      case "linkedin":
        setJsx(<LinkedinIcon />)
        break
      case "github":
        setJsx(<FaGithub />)
        break
      case "email":
        setJsx(<MdEmail />)
        break
      case "twitch":
        setJsx(<TwitchIcon />)
        break
      case "dev":
        setJsx(<DevIcon />)
        break
      default:
        break
    }
  }, [])

  return <>{jsx}</>
}

export default useSocial
