const path = require("path")
const slash = require("slash")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(`
    {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
    .then(result => {
      if (result.errors) {
        console.log("Contentful data error", result.errors)
      }

      const blogTemplate = path.resolve("./src/templates/blogPost.tsx")

      result.data.allContentfulBlogPost.edges.forEach(post => {
        createPage({
          path: `/blog/${post.node.slug}`,
          component: slash(blogTemplate),
          context: {
            slug: post.node.slug,
          },
        })
      })
    })
    .catch(error => console.log("Contentful data error", error))
}
