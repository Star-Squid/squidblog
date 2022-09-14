import React from "react"
import Layout from "../components/layout"
import PostDate from "./postdate"
import PostNav from "./postnav"
import { graphql, useStaticQuery } from "gatsby"
import * as blogPostStyles from "./blogpoststyles.module.scss"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Seo } from "../components/seo"
import { titleCase } from "../helpers/titlecase"

//needed to target each individual post (target by the known slug)
export const query = graphql`
  query ($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      slug
      publishedDate(formatString: "DD MMM YYYY")
      body {
        raw
      }
    }

    allContentfulBlogPost(sort: { order: DESC, fields: publishedDate }) {
      nodes {
        title
        slug
      }
    }
  }
`

export default function BlogPost(props) {
  let thisPostNode
  let thisSlug = props.data.contentfulBlogPost.slug
  let numberOfPosts = props.data.allContentfulBlogPost.nodes.length

  //find this page's position in the order of nodes
  for (var i = 0; i < numberOfPosts; i++) {
    if (props.data.allContentfulBlogPost.nodes[i].slug === thisSlug) {
      thisPostNode = i
      break
    }
  }

  var oldnode, newnode
  if (thisPostNode === 0) {
    newnode = 0
  } else {
    newnode = thisPostNode - 1
  }

  if (thisPostNode === numberOfPosts - 1) {
    oldnode = numberOfPosts - 1
  } else {
    oldnode = thisPostNode + 1
  }

  var oldslug = props.data.allContentfulBlogPost.nodes[oldnode].slug
  var newslug = props.data.allContentfulBlogPost.nodes[newnode].slug
  var oldtitle = props.data.allContentfulBlogPost.nodes[oldnode].title
  var newtitle = props.data.allContentfulBlogPost.nodes[newnode].title

  return (
    <Layout>
      <div>
        <PostDate>
          {props.data.contentfulBlogPost.publishedDate}
          <br />
          post {thisPostNode + 1} of {numberOfPosts}
        </PostDate>
        <h3 className={blogPostStyles.title}>
          {titleCase(props.data.contentfulBlogPost.title)}
        </h3>
        <p className={blogPostStyles.body}>
          {documentToReactComponents(
            JSON.parse(props.data.contentfulBlogPost.body.raw)
          )}
        </p>
      </div>

      <PostNav
        oldslug={oldslug}
        newslug={newslug}
        oldtitle={oldtitle}
        newtitle={newtitle}
      />
    </Layout>
  )
}

export const Head = props => (
  <Seo title={props.data.contentfulBlogPost.title + " - Star Squid Blog"} />
)
