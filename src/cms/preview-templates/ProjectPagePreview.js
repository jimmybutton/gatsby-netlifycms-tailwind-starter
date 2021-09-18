import React from "react"
import ProjectPageTemplate from "../../templates/ProjectPageTemplate"
const marked = require("marked")

const ProjectPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS()

  if (data) {

    // get image assets and transform markdown
    const image =
      data.featuredimage && data.featuredimage.image
        ? {
            ...data.featuredimage,
            image: getAsset(data.featuredimage.image),
          }
        : { image: null, alt: "" }

    const body = data.body ? marked(data.body) : null

    return (
      <ProjectPageTemplate
        location={data.location}
        title={data.title}
        date={new Date(data.date).toLocaleDateString("en-GB", {
          weekday: "short",
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
        image={image}
        body={body}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

export default ProjectPagePreview
