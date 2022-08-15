import React from "react"
import * as blogPostStyles from "./blogpoststyles.module.scss"

export default function PostDate(props) {
  return (
    <p className={blogPostStyles.date}><small>{props.children}</small></p>
  )
}
