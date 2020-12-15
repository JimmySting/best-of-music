import { graphql } from 'gatsby'
import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.scss';

export default ({ data }) => {

  const { title, description, author, github, playlist } = data.site.siteMetadata

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <html lang={"en"} />
        <meta name="description" content={description} />
      </Helmet>
      <App 
        title={title} 
        description={description}
        author={author} 
        github={github}
        playlist={playlist}
      />
    </>
  );
};

export const query = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        title
        description
        author
        github
        playlist
      }
    }
  }
`