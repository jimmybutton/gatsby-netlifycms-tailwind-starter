import * as React from "react"
import { Helmet } from "react-helmet"
import Navbar from "./Navbar"
import Footer from "./Footer"
import useSiteMetadata from "./SiteMetadata"
import { useScroll } from "../hooks/useScroll"

const { NODE_ENV } = process.env

const Layout = ({ children }) => {
  // set global title and description on global layout, can be overwritten on a per-page basis with MyHelmet
  const { title, description } = useSiteMetadata()
  const { scrollY, scrollDirection } = useScroll()

  return (
    <div className="bg-white">
      <Helmet>
        <html lang="en" />
        <title>{title} | UrbanGarden</title>
        <meta name="description" content={description} />
      </Helmet>
      <div className="flex flex-col h-screen justify-between">
        <Navbar
          className={`transition transform duration-300 ease-in-out ${
            scrollDirection === "down" || scrollY < 200
              ? ""
              : "-translate-y-full"
          }`}
        />
        {/* Navbar height will be h-12 sm:h-14 md:h-18 */}
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>

      {/* small badge to display current break-point (only in dev mode) */}
      {NODE_ENV === "development" ? (
        <div className="fixed right-4 bottom-4">
          <div className="inline-block px-2 py-0.5 rounded-full text-xs shadow text-gray-600 bg-white bg-opacity-80">
            <div className="sm:hidden">xs</div>
            <div className="hidden sm:inline md:hidden">sm</div>
            <div className="hidden md:inline lg:hidden">md</div>
            <div className="hidden lg:inline xl:hidden">lg</div>
            <div className="hidden xl:inline 2xl:hidden">xl</div>
            <div className="hidden 2xl:inline">2xl</div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default Layout
