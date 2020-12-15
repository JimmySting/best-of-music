import PropTypes from 'prop-types'
import React from 'react'
import Intro from './Intro/Intro'
import Album from './Album/Album'
import Footer from './Footer/Footer'
import JSONData from '../../content/albums.json'

const App = ({ title, description, author, github, playlist }) => {
  return (
    <>
      <Intro
        title={title}
        description={description}
        next={JSONData[1].theme}
      ></Intro>
      {JSONData.map((album, index) => {
        return (
          <Album
            key={`content_item_${index}`}
            album={album}
            next={JSONData[index + 1] ? JSONData[index + 1].theme : 'footer'}
          ></Album>
        )
      })}
      <Footer author={author} playlist={playlist} github={github} />
    </>
  )
}

App.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  author: PropTypes.string,
  github: PropTypes.string,
  playlist: PropTypes.string,
}

export default App
