const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogTemplate = path.resolve('./src/templates/blogpost.js')
    const res = await graphql(`
        query {
            allContentfulBlogPost {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `)

    res.data.allContentfulBlogPost.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })
}


// const path = require('path')

// //STACK OVERFLOW
// // const path = require('path')


// // module.exports.createPages = ({ graphql, actions }) => {
// //  const {createPage} = actions

// //  return new Promise((resolve, reject) => {
// //     const blogTemplate = path.resolve('src/templates/blog.js')
// //     resolve(
// //         graphql(`
// //         {
// //             allContentfulBlogPost {
// //                 edges {
// //                     node {
// //                         slug
// //                         title
// //                         publishedDate
// //                         body {
// //                             raw
// //                         }
// //                     }
// //                 }
// //             }
// //         }`
// //         ).then((result) => {
// //             if (result.error) {
// //                 reject(result.error)
// //             }
// //             result.data.allContentfulBlogPost.edges.forEach((edge)=>{
// //                 createPage({
// //                     path: `/blog/${edge.node.slug}`,
// //                     component: blogTemplate,
// //                     context: {
// //                         slug: edge.node.slug
// //                     }
// //                 })
// //             })
// //             return
// //         })
// //     )
// //  })
// // }

// //MEAD

//  //get path to template, dynnamically create pages, indicate place from root of project
//  module.exports.createPages = async ({graphql, actions}) => {
//     const {createPages} = actions
//     const blogTemplate = path.resolve('./src/templates/blogpost.js')



//  const res = await graphql(`
//      query {
//          allContentfulBlogPost {
//              edges {
//                  node {
//                      slug
//                  }
//              }
//          }
//      }
//  `)
 
// //receive contenftful data
// res.data.allContentfulBlogPost.edges.forEach((edge) => {
//     this.createPages({
//         component: blogTemplate,
//         path: `/blog/${edge.node.slug}`,
//         context: {
//             slug: edge.node.slug
//         }
//     })
// })

// }

