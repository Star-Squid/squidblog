import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import * as NotFoundStyles from "../components/notfound.module.scss"
import { Seo } from "../components/seo"

const NotFound = () => {
  return (
    <Layout>
      <div className={NotFoundStyles.notfound}>
        <h2>404: Page Not Found</h2>
        <p>
          <Link to="/">return to home page</Link>
        </p>
      </div>
    </Layout>
  )
}

export default NotFound

export const Head = () => <Seo title="404 - Star Squid Blog" />
