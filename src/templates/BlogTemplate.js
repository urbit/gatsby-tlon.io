import React from "react"
import { graphql } from "gatsby"

/*
Two things are important in the code below:


A GraphQL query is made in the second half of the file to get the Markdown data. Gatsby has automagically given you all the Markdown metadata and HTML in this query’s result.

Note: To learn more about GraphQL, consider this excellent resource

The result of the query is injected by Gatsby into the Template component as data. markdownRemark is the property that you’ll find has all the details of the Markdown file. You can use that to construct a template for your blog post view. Since it’s a React component, you could style it with any of the recommended styling systems in Gatsby.

*/

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
}
export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`