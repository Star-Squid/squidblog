import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import * as postStyles from "../components/poststyles.module.scss"
import { Seo } from "../components/seo"

export default function IndexPage() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            slug
            title
            publishedDate(formatString: "D MMM YYYY")
            body {
              raw
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h3>Latest posts</h3>


        {data.allContentfulBlogPost.edges.map(edge => {
          
          return (
            <div className={postStyles.vignette}>
            <Link to={`/blog/${edge.node.slug}`}>
              <div className={postStyles.singlepost}>
               
                  <p>{edge.node.publishedDate}</p>
                  <h2>{edge.node.title}</h2>
                
              </div>
            </Link>
            </div>
          )
        })}
 
    </Layout>
  )
}

export const Head = () => (
  <Seo />
)