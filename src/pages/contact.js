import React from "react"
import Layout from "../components/layout"

export default function ContactPage() {
  return (
    <Layout>
      <h2>Visit me elsewhere:</h2>
      <ul>
        <li>
          <a href="">Web Portfolio</a>
        </li>
        <p>a collection of my learning projects</p>
        <li>
          <a href="">Star Squid Studio</a>
        </li>
        <p>art portfolio, the hub of the Star Squid universe</p>
        <li>
          <a href="mailto:hello@star-squid.art">hello@star-squid.art</a>
        </li>
        <p>and that's the email, baby</p>
      </ul>
    </Layout>
  )
}
