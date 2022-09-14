import React from "react"
import { Link } from "gatsby"
import * as navStyles from "./navstyles.module.scss"

export default function PostNav(props) {
  return (
    <div className={navStyles.postNav}>
      <div className={navStyles.newer}>
        <div>
          <Link to={`/blog/${props.newslug}`}>
            ← newer
            <br />
            {props.newtitle}
          </Link>
        </div>
      </div>
      <div className={navStyles.older}>
        <div>
          <Link to={`/blog/${props.oldslug}`}>
            older →<br />
            {props.oldtitle}
          </Link>
        </div>
      </div>
    </div>
  )
}
