import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"

export const Seo = ({ title, description, pathname, children }) => {
  const { title: defaultTitle, description: defaultDescription, author} = useSiteMetadata()
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    author
  }
  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="author" content="Barbara Malta" />
      {children}
    </>
  )
}