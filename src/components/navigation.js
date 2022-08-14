import React from "react"
import {Link} from "gatsby"

export default function Navigation() {
  return (
<nav>
      <div class="nav-item"><Link to="/">HOME</Link></div>
      <hr />
      <div class="nav-item"><Link to="/about">ABOUT</Link></div>
      <hr />
      <div class="nav-item"><Link to="/contact">CONTACT</Link></div>
      <hr />
      <div class="nav-item"><h2>☼</h2></div>
    </nav>
  )
}
