import React from "react"
import Layout from "../components/layout"
import PostDate from "./postdate"
// import PostNav from "./postnav"
import { graphql } from "gatsby"
import * as blogPostStyles from "./blogpoststyles.module.scss"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Seo } from "../components/seo"
import { titleCase } from "../helpers/titlecase"

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



// ...........

import React from 'react';
import { createClient } from 'contentful';

import '../styles/App.css';
import MyCommentBox from './MyCommentBox.jsx';

const fakeBlogPostId = 'my-blog-post';

const postData = (url, data) => {

    return fetch(`.netlify/functions${url}`, {
        body: JSON.stringify(data),
        headers: {
            'content-type': 'application/json'
        },
        method: 'POST',
        //mode: 'cors' // if your endpoints are on a different domain
    }).then(response => response.json());
};

const contentfulClient = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    host: process.env.CONTENTFUL_HOST
});



//............


export default function BlogPost(props) {
  return (
    <Layout>
      <div>
        <PostDate>{props.data.contentfulBlogPost.publishedDate}</PostDate>
        <h3 className={blogPostStyles.title}>
          {titleCase(props.data.contentfulBlogPost.title)}
        </h3>
        <p className={blogPostStyles.body}>
          {documentToReactComponents(
            JSON.parse(props.data.contentfulBlogPost.body.raw)
          )}
        </p>
      </div>
      {/* <PostNav></PostNav> */}

      <div>
            <MyCommentBox
                subjectId={fakeBlogPostId}
                postData={postData}
                contentfulClient={contentfulClient}
            />
        </div>

    </Layout>
  )
}

export const Head = props => (
  <Seo title={props.data.contentfulBlogPost.title + " - Star Squid Blog"} />
)
