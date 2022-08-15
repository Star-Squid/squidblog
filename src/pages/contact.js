import React from "react"
import Layout from "../components/layout"

export default function ContactPage() {
  return (
    <Layout>
      <h2>Visit me elsewhere:</h2>
      <ul>
        <li>
          <a href="https://star-squid.github.io/">Web Portfolio</a>
        </li>
        <p>a collection of learning projects I've outgrown</p>
        <li>
          <a href="https://star-squid.art/">Star Squid Studio</a>
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
