import React from "react"
import { navigate } from "gatsby"
import Layout from "../components/Layout"
import { SectionHeading } from "../components/Sections"
import { Container } from "../components/Sections"

function PageNotFound() {
  return (
    <Layout title="Page not found">
      <Container className="text-center">
        <SectionHeading>Page not found</SectionHeading>
        <p className="mt-4">
          Oops! The page you are looking for has been removed or relocated.
        </p>
        <button
          className="mt-6 inline-flex items-center justify-center px-4 py-2 border border-transparent text-xs font-medium transition-colors duration-100 text-green-600 bg-white rounded-md shadow lg:text-sm group hover:bg-green-50"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </Container>
    </Layout>
  )
}

export default PageNotFound
