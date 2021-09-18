import React from "react"
import { Link } from "gatsby"

const PostList = ({ posts }) => {
  if (posts.length === 0) {
    return <p>There are not posts yet. Create posts using the Netlify CMS.</p>
  }

  return (
    <ol>
      {posts.map(edge => {
        const post = edge.node
        return (
          <li key={post.parent.name}>
            <h2>
              <Link to={`/projects/${post.parent.name}`} itemProp="url">
                {post.frontmatter.title}
              </Link>
            </h2>
            <small>Date: {post.frontmatter.date}</small>
            <p
              dangerouslySetInnerHTML={{
                __html: post.frontmatter.description || post.excerpt,
              }}
              itemProp="description"
            />
          </li>
        )
      })}
    </ol>
  )
}

export default PostList
