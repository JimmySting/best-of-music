import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-scroll'
import PropTypes from 'prop-types'
import Archive from './Archive'
import SpotifyPlayer from '../Spotify/SpotifyPlayer'

const Footer = ({ author, github, playlist }) => {
  return (
    <footer id="footer" className="footer navbar-static-bottom">
      <Container>
        <span className="back-to-top">
          <Link to="intro" smooth duration={1000}>
            <i className="fa fa-angle-double-up fa-4x" aria-hidden="true" />
          </Link>
        </span>
        <div className="full-playlist">
          <h3>Best of 2020 - Full Playlist</h3>
          <h6>
            <i>Tracks from highlighted albums and more</i>
          </h6>
          <SpotifyPlayer uri={playlist} size="large"></SpotifyPlayer>
        </div>
        <Archive />
        <hr />
        <div className="bottom">
          <div>
            <div>
              © {new Date().getFullYear()} - {author}
            </div>
            <div>
              Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </div>
          </div>

          <div>
            <span>
              <a
                className="github-icon"
                href={github}
                rel="noopener noreferrer"
                target="_blank"
                aria-label="git-hub-link"
              >
                <i className="fa fa-github" />
              </a>
            </span>
          </div>
        </div>
      </Container>
    </footer>
  )
}

Footer.propTypes = {
  author: PropTypes.string,
  github: PropTypes.string,
  playlist: PropTypes.string,
}

export default Footer
