import React from "react"
import { Link } from "gatsby"
import * as navigationStyles from "./navigation.module.scss"
// import SunIcon from "./sunicon"
// import { useState } from "react"

export default function Navigation({handleClick}) {
  return (
    <nav>
      <div className={navigationStyles.navItem}>
        <Link
          to="/"
          className={navigationStyles.link}
          activeClassName={navigationStyles.activeNavItem}
        >
          HOME
        </Link>
      </div>
      <hr />
      <div className={navigationStyles.navItem}>
        <Link
          to="/about"
          className={navigationStyles.link}
          activeClassName={navigationStyles.activeNavItem}
        >
          ABOUT
        </Link>
      </div>
      <hr />
      <div className={navigationStyles.navItem}>
        <Link
          to="/contact"
          className={navigationStyles.link}
          activeClassName={navigationStyles.activeNavItem}
        >
          CONTACT
        </Link>
      </div>
      <hr/>
      <div className={navigationStyles.navItem}>
        <h2 onClick={handleClick}>☀</h2>
              </div>
    </nav>
  )
}
