import React from "react"

// A simple header without an image
function Header({ heading, subheading }) {
  return (
    <header className="bg-green-700 pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20 lg:pt-36 lg:pb-24">
      <div className="mx-auto max-w-4xl text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
          {heading}
        </h1>
        {subheading ? (
          <p className="mt-3 text-green-100 sm:text-lg lg:text-xl lg:mt-6">
            {subheading}
          </p>
        ) : null}
      </div>
    </header>
  )
}

// A different header for the project page
export function ProjectHeader({ heading, location, date }) {
  return (
    <header className="bg-green-700 py-24 sm:pt-28 sm:pb-32 md:pt-32 md:pb-32 lg:py-36">
      <div className="mx-auto max-w-4xl text-center px-4 sm:px-6 lg:px-8">
        <div className="text-green-100 sm:text-lg lg:text-xl lg:mt-6">
          {location} &bull; {date}
        </div>
        <h1 className="mt-2 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
          {heading}
        </h1>
      </div>
    </header>
  )
}

export default Header
