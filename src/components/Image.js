import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

function Image({ image, alt, ...rest }) {
  if (image && image.url) {
    // this is an image coming from Netlify CMS
    return <img src={image.url} {...rest} alt={alt} />
  } else if (image && image.childImageSharp) {
    // this should be an image processed by gatsby-plugin-image
    const imageRef = getImage(image)
    return <GatsbyImage image={imageRef} alt={alt} {...rest} />
  } else {
    return <div className="bg-gray-100 p-4 text-gray-600">Image not defined.</div>
  }
}

export default Image
