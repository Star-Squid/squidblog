import React from "react"
import {Link} from "gatsby"
import * as headerStyles from "./header.module.scss"

export default function Header() {
  return (
<header className="header">
          <h1><Link to="/" className={headerStyles.link}>Star&nbsp;Squid&nbsp;Blog</Link></h1>
        </header>
  )
}
