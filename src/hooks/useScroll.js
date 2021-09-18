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

export function useScroll() {
  // storing this to get the scroll direction
  const [lastScrollTop, setLastScrollTop] = useState(0)
  // the offset of the document.body
  const [bodyOffset, setBodyOffset] = useState(
    // document.body.getBoundingClientRect(), 
    {top:0, left:0}
  )
  // the vertical direction
  const [scrollY, setScrollY] = useState(bodyOffset.top)
  // the horizontal direction
  const [scrollX, setScrollX] = useState(bodyOffset.left)
  // scroll direction would be either up or down
  const [scrollDirection, setScrollDirection] = useState()

  const listener = e => {
    setBodyOffset(document.body.getBoundingClientRect())
    setScrollY(-bodyOffset.top)
    setScrollX(bodyOffset.left)
    setScrollDirection(lastScrollTop > -bodyOffset.top ? "down" : "up")
    setLastScrollTop(-bodyOffset.top)
    // console.log(scrollDirection)
  }

  useEffect(() => {
    if (typeof window === "undefined" || !window.document) {
      console.log(`window undefined, bailing out of the useeffect. Going to continue to render??`)
      return
    }
    window.addEventListener("scroll", listener)
    return () => {
      window.removeEventListener("scroll", listener)
    }
  })

  return {
    scrollY,
    scrollX,
    scrollDirection,
  }
}
