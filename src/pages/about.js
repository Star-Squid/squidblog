import React from "react"
import Layout from "../components/layout"

export default function AboutPage() {
  return (
    <Layout>
      <h2>FAQ:</h2>
      <ul>
        <li>
          Why is it called Star Squid Blog?
          <p>Because Star Squid is a name I use online a lot</p>
        </li>

        <li>
          What's so cool about squid?
          <p>
            They are intelligent, come in a range of sizes, are very cute with
            their large eyes. They can change colours and textures of their
            skin.
          </p>
        </li>

        <li>
          Do you think you're such a star?
          <p>"Cosmic squid" was already taken</p>
        </li>
      </ul>
    </Layout>
  )
}
