import React, { useState, useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import Fade from 'react-reveal/Fade'
import { Link } from 'react-scroll'
import PropTypes from 'prop-types'
import AlbumImg from '../Image/AlbumImg'
import SpotifyPlayer from '../Spotify/SpotifyPlayer'

const Album = ({ album, next }) => {
  const { artist, title, img, spotify, theme, tracks } = album
  const [isDesktop, setIsDesktop] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true)
      setIsMobile(false)
    } else {
      setIsMobile(true)
      setIsDesktop(false)
    }
  }, [])

  const tracks_elements = tracks.map((track, index) => (
    <i key={track}>
      {track}
      {index < tracks.length - 1 && ', '}
    </i>
  ))

  return (
    <section id={theme} className="jumbotron">
      <Container>
        <Fade
          left={isDesktop}
          bottom={isMobile}
          duration={1000}
          delay={500}
          distance="30px"
        >
          <h1 className="album-artist">{artist}</h1>
        </Fade>
        <Fade
          left={isDesktop}
          bottom={isMobile}
          duration={1000}
          delay={600}
          distance="30px"
        >
          <h3 className="album-title">{title}</h3>
        </Fade>
        <Row className="album-artwork">
          <Fade bottom duration={1000} delay={700} distance="30px">
            <div>
              <AlbumImg alt="album artwork" filename={img} />
            </div>
          </Fade>
          <div></div>
          <Fade right duration={1000} delay={700} distance="30px">
            <div className="fav-tracks">
              <p>
                <b>Favorite Tracks: </b>
                {tracks_elements}
              </p>
              <SpotifyPlayer uri={spotify} />
            </div>
          </Fade>
        </Row>
        <Fade bottom duration={1000} delay={1000} distance="30px">
          <p className="next-btn">
            <span className="">
              <Link to={next} smooth duration={1000}>
                <i
                  className="fa fa-angle-double-down fa-2x"
                  aria-hidden="true"
                />
              </Link>
            </span>
          </p>
        </Fade>
      </Container>
    </section>
  )
}

Album.propTypes = {
  album: PropTypes.object,
  next: PropTypes.string,
}

export default Album
