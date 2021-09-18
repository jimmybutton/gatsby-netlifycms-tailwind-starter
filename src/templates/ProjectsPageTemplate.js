import React from "react"
import Header from "../components/Header"
import { Container, CardSet } from "../components/Sections"

function ProjectsPageTemplate({ heading, subheading, posts = [] }) {
  return (
    <div>
      <Header heading={heading} subheading={subheading} />
      <Container className="-mt-20 sm:-mt-24 lg:-mt-32">
        <CardSet posts={posts} />
      </Container>
    </div>
  )
}

export default ProjectsPageTemplate
