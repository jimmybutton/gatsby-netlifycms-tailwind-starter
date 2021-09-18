import React, { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const NAVLINK_CLASSES =
  "my-1 py-3 px-3 text-center font-medium text-gray-600 border-b-4 border-white hover:border-green-700 md:mx-2 md:my-0"

// this link will be active when itself or deeper routes
// are current
// https://reach.tech/router/api/Link
// this is only active when the location pathname is exactly
// the same as the href.
const isActive = ({ isCurrent }) => {
  return isCurrent
    ? { className: NAVLINK_CLASSES + " text-green-700 border-green-700" }
    : {}
}

const ExactNavLink = ({ children, ...rest }) => {
  return (
    <div className="flex justify-center">
      <Link className={NAVLINK_CLASSES} getProps={isActive} {...rest}>
        {children}
      </Link>
    </div>
  )
}

// this link will be active when itself or deeper routes
// are current
const isPartiallyActive = ({ isPartiallyCurrent }) => {
  return isPartiallyCurrent
    ? { className: NAVLINK_CLASSES + " text-green-700 border-green-700" }
    : {}
}

const PartialNavLink = ({ children, ...rest }) => {
  return (
    <div className="flex justify-center">
      <Link className={NAVLINK_CLASSES} getProps={isPartiallyActive} {...rest}>
        {children}
      </Link>
    </div>
  )
}

const Navbar = ({ className }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className={`fixed top-0 w-full z-30 bg-white shadow-xl ${className}`}>
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between py-2">
          <Link className="flex items-center gap-1" to="/">
            <StaticImage
              src="../img/urbangarden-icon.png"
              alt="UrbanGarden icon"
              className="w-8 h-8 sm:w-10 sm:h-10"
              layout="constrained"
              width={40}
              height={40}
              loading="eager"
              backgroundColor="transparent"
              placeholder="blurred"
            />
            <div className="text-xl font-bold tracking-wide lg:text-2xl">
              <span className="text-gray-800 font-semibold">Urban</span>
              <span className="text-green-700">Garden</span>
            </div>
          </Link>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
              aria-label="toggle menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu open: "block", Menu closed: "hidden" */}
        <div
          className={
            "items-center " + (menuOpen ? "block" : "hidden") + " md:flex"
          }
        >
          <div className="flex flex-col w-full md:flex-row md:mx-6 md:my-2 items-center">
            <ExactNavLink
              to="/"
              onClick={() => {
                setMenuOpen(false)
              }}
            >
              Home
            </ExactNavLink>
            <PartialNavLink
              to="/projects"
              onClick={() => {
                setMenuOpen(false)
              }}
            >
              Projects
            </PartialNavLink>
            <ExactNavLink
              to="/about"
              onClick={() => {
                setMenuOpen(false)
              }}
            >
              About
            </ExactNavLink>
            <ExactNavLink
              to="/contact"
              onClick={() => {
                setMenuOpen(false)
              }}
            >
              Contact
            </ExactNavLink>
            <a
              href="https://github.com/jimmybutton/gatsby-netlifycms-tailwind-starter"
              className="py-4 md:py-2 md:pl-4"
              rel="noreferrer"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="h-8 w-8 hover:text-gray-600"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
