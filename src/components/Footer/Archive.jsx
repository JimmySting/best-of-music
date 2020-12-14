import React from 'react'
import {
  Container,
  Button,
  Accordion,
  AccordionContext,
  useAccordionToggle,
} from 'react-bootstrap'
import JSONData from '../../../content/archive.json'

function ContextAwareToggle({ children, eventKey, callback }) {
  const currentEventKey = React.useContext(AccordionContext)
  const isCurrentEventKey = currentEventKey === eventKey

  const decoratedOnClick = useAccordionToggle(
    eventKey,
    () => callback && callback(eventKey)
  )

  return (
    <div className="archive-toggle">
      <h3 type="button" onClick={decoratedOnClick} onKeyDown={decoratedOnClick}>
        {children}
      </h3>
      {isCurrentEventKey && (
        <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
      )}
      {!isCurrentEventKey && (
        <i className="fa fa-angle-down fa-2x" aria-hidden="true" />
      )}
    </div>
  )
}

const Archive = () => {
  return (
    <section id="archive" className="archive">
      <Container>
        <Accordion defaultActiveKey="1">
          <ContextAwareToggle eventKey="0">Archive</ContextAwareToggle>
          <Accordion.Collapse eventKey="0">
            <div className="archive-links">
              {JSONData.map((archive, index) => {
                return (
                  <Button
                    key={`content_item_${index}`}
                    variant="light"
                    href={archive.playlist}
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label={`${archive.year}-playlist-link`}
                  >
                    {archive.year}
                  </Button>
                )
              })}
            </div>
          </Accordion.Collapse>
        </Accordion>
      </Container>
    </section>
  )
}

export default Archive
