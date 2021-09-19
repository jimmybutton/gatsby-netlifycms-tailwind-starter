/**
 * https://dev.to/pratiksharm/navbar-hide-and-show-on-scroll-using-custom-react-hooks-1k98
 *
 * Modifications due to document and window not being available for server-side rendering ()
 * see https://github.com/gatsbyjs/gatsby/issues/19487#issuecomment-580871029
 *
 * useScroll React custom hook
 * Usage:
 *    const { scrollX, scrollY, scrollDirection } = useScroll();
 */

import { useState, useEffect } from "react"
import { globalHistory } from "@reach/router"

export function useScroll() {
  // storing this to get the scroll direction
  const [lastScrollTop, setLastScrollTop] = useState(0)
  // the vertical direction
  const [scrollY, setScrollY] = useState(0)
  // the horizontal direction
  const [scrollX, setScrollX] = useState(0)
  // scroll direction would be either up or down
  const [scrollDirection, setScrollDirection] = useState()

  const listener = e => {
    const bodyOffset = document.body.getBoundingClientRect()
    setScrollY(-bodyOffset.top)
    setScrollX(bodyOffset.left)
    setScrollDirection(lastScrollTop > -bodyOffset.top ? "down" : "up")
    setLastScrollTop(-bodyOffset.top)
  }

  useEffect(() => {
    if (typeof window === "undefined" || !window.document) {
      // required for static rendering, as window is not defined
      return
    }
    window.addEventListener("scroll", listener)
    return () => {
      window.removeEventListener("scroll", listener)
    }
  })

  // on route change, reset Y to 0 so the navbar is shown
  // see https://stackoverflow.com/a/61664193/13975292
  useEffect(() => {
    return globalHistory.listen(({ action }) => {
      if (action === "PUSH") {
        setScrollY(0)
      }
    })
  }, [setScrollY])

  return {
    scrollY,
    scrollX,
    scrollDirection,
  }
}
