import React from "react"
import { Link } from "gatsby"
import * as navStyles from "./navstyles.module.scss"

export default function PostNav(props) {
  if (props.last === true) {
    return (
      <div className={navStyles.postNav}>
        <div className={navStyles.newer}>
          <Link to={`/blog/${props.newslug}`}>
            ← newer
            <br />
            {props.newtitle}
          </Link>
        </div>
        <div className={navStyles.older}>&nbsp;</div>
      </div>
    )
  } else if (props.first === true) {
    return (
      <div className={navStyles.postNav}>
        <div className={navStyles.newer}>&nbsp;</div>
        <div className={navStyles.older}>
          <Link to={`/blog/${props.oldslug}`}>
            older →<br />
            {props.oldtitle}
          </Link>
        </div>
      </div>
    )
  } else {
    return (
      <div className={navStyles.postNav}>
        <div className={navStyles.newer}>
          <Link to={`/blog/${props.newslug}`}>
            ← newer
            <br />
            {props.newtitle}
          </Link>
        </div>
        <div className={navStyles.older}>
          <Link to={`/blog/${props.oldslug}`}>
            older →<br />
            {props.oldtitle}
          </Link>
        </div>
      </div>
    )
  }
}
