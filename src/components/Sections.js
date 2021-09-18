import React from "react"
import Card from "./Card"
import Image from './Image'

/**
 * Basic container to add max-w-7xl, some p-x and p-y
 */
export const Container = ({ className, children }) => {
  return (
    <div
      className={`max-w-7xl px-4 py-10 mx-auto sm:px-6 lg:px-8 lg:py-16 ${className}`}
    >
      {children}
    </div>
  )
}

/**
 * Basic style for page section heading
 */
export const SectionHeading = ({ children }) => {
  return (
    <h2 className="text-2xl font-medium text-gray-800 sm:text-3xl lg:text-4xl">
      {children}
    </h2>
  )
}

/**
 * Text image split section, with image on the right by default
 */
export const TextImageSplit = ({ image, children, imageLeft = false }) => {
  return (
    <Container>
      <div className="flex flex-col lg:flex-row lg:items-center lg:gap-x-10">
        <div className={`w-full pt-8 pb-12 lg:w-1/2 ${imageLeft ? "lg:order-last" : ""}`}>
          <div className="text-center max-w-lg mx-auto lg:text-left lg:max-w-7xl">
            {children}
          </div>
        </div>

        <div className={`flex items-center justify-center w-full lg:w-1/2`}>
          <Image
            className="rounded-md h-full w-full object-cover"
            image={image.image || image}
            alt={image.alt || ""}
          />
        </div>
      </div>
    </Container>
  )
}

/**
 * Cards for post previews, laid out in a grid
 * columns: 1 (xs), 2 (sm) and 3 (lg)
 */
export const CardSet = ({ className, posts }) => {
  return (
    <div
      className={`grid grid-cols-1 mt-6 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-12 xl:gap-x-8 ${className}`}
    >
      {posts.map(({ node: post }, idx) => {
        const fm = post.frontmatter
        return (
          <Card
            image={fm.featuredimage}
            heading={fm.title}
            date={fm.date}
            location={fm.location}
            to={post.fields.slug}
            key={idx}
          />
        )
      })}
    </div>
  )
}
