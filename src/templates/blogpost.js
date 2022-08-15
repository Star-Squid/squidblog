import React from "react"
import Layout from "../components/layout"
import PostDate from "./postdate"
import PostNav from "./postnav"
import { graphql } from "gatsby"
import * as blogPostStyles from "./blogpoststyles.module.scss"

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
      
        <PostDate>{props.data.contentfulBlogPost.publishedDate}</PostDate>
        <h2 className={blogPostStyles.title}>{props.data.contentfulBlogPost.title}</h2>
        <p>
        {props.data.contentfulBlogPost.body.raw}
        </p>
      
      <PostNav></PostNav>
    </Layout>
  )
}
