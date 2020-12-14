import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-scroll'
import PropTypes from 'prop-types'
import Archive from './Archive'

const Footer = ({ author, github }) => {
  return (
    <footer id="footer" className="footer navbar-static-bottom">
      <Container>
        <span className="back-to-top">
          <Link to="intro" smooth duration={1000}>
            <i className="fa fa-angle-double-up fa-4x" aria-hidden="true" />
          </Link>
        </span>
        <Archive />
        <hr />
        <div className="bottom">
          <div>
            <div>
              © {new Date().getFullYear()} - {author}
            </div>
            <div className="info-text">
              Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </div>
          </div>

          <div className="info">
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

        {/* {isEnabled && <GithubButtons />} */}
      </Container>
    </footer>
  )
}

Footer.propTypes = {
  author: PropTypes.string,
  github: PropTypes.string,
}

export default Footer
