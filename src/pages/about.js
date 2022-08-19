import React from "react"
import Layout from "../components/layout"
import { Seo } from "../components/seo"

export default function AboutPage() {
  return (
    <Layout>
      <div>
        <h2>FAQ:</h2>
        <ul>
          <li>
            Why is it called Star Squid Blog?
            <p>Star Squid is a name I use online a lot.</p>
          </li>

          <li>
            What's so cool about squid?
            <p>
              They are intelligent, come in a range of sizes, are very cute with their large eyes. They can change colours and textures of their skin.
            </p>
            <p>
              Also, I used to have a cat called Squid and he was the coolest cat.
            </p>
          </li>
          <li>
            How do I grow long toenails?
            <p>You need to pay a witch what you thinnk it's worth.</p>
          </li>
        </ul>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="About - Star Squid Blog" />
