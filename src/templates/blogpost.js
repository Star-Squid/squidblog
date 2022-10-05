import React from "react"
import Layout from "../components/layout"
import PostDate from "./postdate"
import PostNav from "./postnav"
import { graphql } from "gatsby"
import * as blogPostStyles from "./blogpoststyles.module.scss"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { Seo } from "../components/seo"
import { titleCase } from "../helpers/titlecase"
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types'

//needed to target each individual post (target by the known slug)
export const query = graphql`
  query MyQuery($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      slug
      publishedDate(formatString: "DD MMM YYYY")
      body {
        __typename
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            title
            description
            gatsbyImageData(width: 700)
            __typename
          }
          
          id
          title
        }
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
const options = {
  // renderNode: {
  //     [BLOCKS.EMBEDDED_ASSET]: ({ data: { target: { fields }}}) =>
  //         `<img src="${fields.file.url}" height="${fields.file.details.image.height}" width="${fields.file.details.image.width}" alt="${fields.description}"/>`,
  // },

  // renderNode: {
  //   [BLOCKS.EMBEDDED_ASSET]: node => {
  //     console.log(node)
  //     let { description, gatsbyImageData } = query.contentfulBlogPost.body.references
  //     console.log(gatsbyImageData.images.sources[0].srcSet)
  //     return <img src={gatsbyImageData.images.sources[0].srcSet} alt={description} />
  //   },
  // },
  // renderMark: {
  //   [MARKS.BOLD]: (text) => <h1>{text}</h1>,
  // },

  //commented in case you can't have two renderNode
  // renderNode: {
  //   [INLINES.HYPERLINK]: (node, children) => {
  //     const { uri } = node.data
  //     return (
  //       <a href={uri} className="underline">
  //         {children}
  //       </a>
  //     )
  //   },

    [BLOCKS.HEADING_2]: (node, children) => {
      return <h2>{children}</h2>
    },
}

function squidRender(raw, references, options) {
  const richText = JSON.parse(raw)
  console.log("raw: ")

  for (let i = 0; i < JSON.parse(raw)["content"].length; i++) {
    let currentNode = JSON.parse(raw)["content"][i]
    //console.log(currentNode)
    if (currentNode.nodeType == "paragraph") {
      console.log("p: " + currentNode.content[0].value)
    } else if (currentNode.nodeType == "embedded-asset-block") {
      console.log("asset: " + currentNode.data.target.sys.id)
      //console.log(query.contentfulBlogPost(helloSlug))
      console.log("asset")
    } else {
      console.log("something else: " + currentNode.content)
    }
  }

  // if (!references || !references.length) {
  //   return documentToReactComponents(richText)
  // } else {
  //   return documentToReactComponents(richText)
  // }

  return documentToReactComponents(richText)
}

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
  var last = false
  var first = false

  if (thisPostNode === 0) {
    newnode = 0
    first = true
  } else {
    newnode = thisPostNode - 1
    first = false
  }

  if (thisPostNode === numberOfPosts - 1) {
    oldnode = numberOfPosts - 1
    last = true
  } else {
    oldnode = thisPostNode + 1
    last = false
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
        <div className={blogPostStyles.body}>
        {/* {renderRichText(props.data.contentfulBlogPost.body.raw, options)}
    //error from gatsby-source-contentful/rich-text.js: "undefined is not valid JSON" */}

        {/* {documentToReactComponents(JSON.parse(props.data.contentfulBlogPost.body.raw))} */}
        {/* {documentToHtmlString(props.data.contentfulBlogPost.body.raw)} */}
        {squidRender(props.data.contentfulBlogPost.body.raw, props.data.contentfulBlogPost.body.references, options)}


          
        </div>
      </div>

      <PostNav
        last={last}
        first={first}
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
