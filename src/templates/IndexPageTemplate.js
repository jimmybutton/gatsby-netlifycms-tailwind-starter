import React from "react"
import { Link } from "gatsby"
import { SectionHeading, TextImageSplit } from "../components/Sections"
import { PrimaryButton, SecondaryButton } from "../components/Buttons"
import { Container, CardSet } from "../components/Sections"
import Image from "../components/Image"

const IndexPageTemplate = ({
  heading,
  subheading,
  image,
  posts = [],
  about,
}) => {
  return (
    <div>
      {/* Header */}
      <div className="relative bg-green-700 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pt-24 pb-12 bg-green-700 sm:pt-28 sm:pb-14 md:pt-32 md:pb-16 lg:w-1/2 lg:pt-44 lg:pb-24 xl:pt-48 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-green-700 transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <div className="relative z-20 mx-auto lg:max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-md mx-auto lg:max-w-lg lg:mx-0 lg:text-left">
                <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                  {heading}
                </h1>
                <p className="mt-2 text-green-100 sm:mt-4 lg:mt-6 lg:text-xl">
                  {subheading}
                </p>
                <PrimaryButton to="/contact" className="mt-6 lg:mt-10">
                  Contact us
                </PrimaryButton>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <Image
            className="h-56 w-full object-cover sm:h-72 md:h-92 lg:w-full lg:h-full"
            image={image}
            alt=""
          />
        </div>
      </div>

      {/* Featured projects */}
      <Container>
        <div className="flex justify-between items-baseline">
          <SectionHeading>Our projects from all over the world</SectionHeading>
          <Link className="text-green-700 underline hover:text-green-800" to="/projects">
            View all
          </Link>
        </div>
        <div className="mt-8">
          <CardSet posts={posts} />
        </div>
      </Container>

      {/* About section */}
      <TextImageSplit image={about.image}>
        <SectionHeading>{about.heading}</SectionHeading>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          {about.description}
        </p>
        <SecondaryButton to={about.button.url} className="mt-6 lg:mt-10">
          {about.button.label}
        </SecondaryButton>
      </TextImageSplit>
    </div>
  )
}

export default IndexPageTemplate
