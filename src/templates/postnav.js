import React from "react"
import { Link } from "gatsby"
import * as navStyles from "./navstyles.module.scss"

export default function PostNav(props) {
  return (
    <div className={navStyles.postNav}>
      {props.first === true ? (
        <div className={navStyles.newer}>&nbsp;</div>
      ) : (
        <div className={navStyles.newer}>
          <Link to={`/blog/${props.newslug}`}>
            ← newer
            <br />
            {props.newtitle}
          </Link>
        </div>
      )}

      {props.last === true ? (
        <div className={navStyles.older}>&nbsp;</div>
      ) : (
        <div className={navStyles.older}>
          <Link to={`/blog/${props.oldslug}`}>
            older →<br />
            {props.oldtitle}
          </Link>
        </div>
      )}
    </div>
  )
}
