import React from "react"
import ProjectsPageTemplate from "../../templates/ProjectsPageTemplate"

const ProjectsPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS()

  if (data) {
    return (
      <ProjectsPageTemplate
        heading={data.heading}
        subheading={data.subheading}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

export default ProjectsPagePreview