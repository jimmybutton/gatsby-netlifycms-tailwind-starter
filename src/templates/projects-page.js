import React from "react"
import { graphql } from "gatsby"
import MyHelmet from "../components/MyHelmet"
import ProjectsPageTemplate from "./ProjectsPageTemplate"

const ProjectsPage = ({ data }) => {
  const { frontmatter: fm } = data.markdownRemark
  const { edges: posts } = data.allMarkdownRemark

  return (
    <>
    <MyHelmet title={fm.title} description={fm.subheading} />
      <ProjectsPageTemplate
        heading={fm.heading}
        subheading={fm.subheading}
        posts={posts}
      />
    </>
  )
}

export default ProjectsPage

export const projectsPageQuery = graphql`
  query ProjectsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        heading
        subheading
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "project-page" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            location
            featuredimage {
              alt
              image {
                childImageSharp {
                  gatsbyImageData(
                    width: 640
                    placeholder: BLURRED
                    aspectRatio: 1.5
                    transformOptions: { fit: COVER, cropFocus: CENTER }
                  )
                }
              }
            }
          }
        }
      }
    }
  }
`

