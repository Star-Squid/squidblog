require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Star Squid Blog`,
    description: `I post random thoughts as an excuse to play with web development concepts`,
    author: `Barbara Malta`,
  },

  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
          shortname: `star-squid-blog`
      }
  },
    `gatsby-plugin-image`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Star Squid Blog",
        short_name: "SSB",
        description: "I post random thoughts as an excuse to play with web development concepts",
        start_url: "/",
        background_color: "#9b9438",
        theme_color: "#3d4447",
        display: "standalone",
        icon: "src/images/icon.png", 
        crossOrigin: `use-credentials`,
      },
    }
  ],
}
