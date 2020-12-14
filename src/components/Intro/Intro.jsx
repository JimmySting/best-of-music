import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import Fade from 'react-reveal/Fade'
import { Link } from 'react-scroll'
import PropTypes from 'prop-types'

const Intro = ({ title, description, next }) => {
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

  return (
    <section id="intro" className="jumbotron">
      <Container>
        <Fade
          left={isDesktop}
          bottom={isMobile}
          duration={1000}
          delay={500}
          distance="30px"
        >
          <h1 className="intro-title">{title}</h1>
        </Fade>
        <Fade right duration={1000} delay={600} distance="30px">
          <h3 className="intro-description">{description}</h3>
        </Fade>
        <Fade
          left={isDesktop}
          bottom={isMobile}
          duration={1000}
          delay={1000}
          distance="30px"
        >
          <p className="start-btn">
            <span className="">
              <Link to="theme-1" smooth duration={1000}>
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

Intro.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  next: PropTypes.string,
}

export default Intro
