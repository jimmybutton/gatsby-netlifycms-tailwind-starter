import React from "react"
import AboutPageTemplate from "../../templates/AboutPageTemplate"
const marked = require("marked")

const AboutPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS()

  // need to get the image assets and put them in the team array
  const team = data.team.map(member => {
    const image = getAsset(member.image)
    return {
      ...member,
      image,
    }
  })

  // render markdown for cms preview
  const html = marked(data.body)

  if (data) {
    return (
      <AboutPageTemplate
        heading={data.heading}
        subheading={data.subheading}
        html={html}
        team={team}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

export default AboutPagePreview
