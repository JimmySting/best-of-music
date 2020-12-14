import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const AlbumImg = ({ filename, alt }) => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { sourceInstanceName: { eq: "images" } }) {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fixed(width: 300) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.allFile.edges.find(n =>
        n.node.relativePath.includes(filename)
      )

      if (!image) return null

      const imageFixed = image.node.childImageSharp.fixed
      return <Img className="rounded shadow-lg" alt={alt} fixed={imageFixed} />
    }}
  />
)

AlbumImg.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
}

export default AlbumImg
