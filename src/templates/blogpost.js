import React from "react"
import Layout from "../components/layout"
import PostDate from "./postdate"
// import PostNav from "./postnav"
import { graphql } from "gatsby"
import * as blogPostStyles from "./blogpoststyles.module.scss"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Seo } from "../components/seo"

//needed to target each individual post (target by the known slug)
export const query = graphql`
  query ($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "DD MMM YYYY")
      body {
        raw
      }
    }
  }
`

export default function BlogPost(props) {
  return (
    <Layout>
      <div>
        <PostDate>{props.data.contentfulBlogPost.publishedDate}</PostDate>
        <h2 className={blogPostStyles.title}>
          {props.data.contentfulBlogPost.title}
        </h2>
        <p className={blogPostStyles.body}>
          {documentToReactComponents(
            JSON.parse(props.data.contentfulBlogPost.body.raw)
          )}
        </p>
      </div>
      {/* <PostNav></PostNav> */}
    </Layout>
  )
}

export const Head = (props) => (
  <Seo title={props.data.contentfulBlogPost.title + " - Star Squid Blog"} />
)
