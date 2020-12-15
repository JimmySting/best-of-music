module.exports = {
  siteMetadata: {
    title: `Best of 2020`,
    description: `Annual year-end music highlights`,
    author: `James Fitzpatrick`,
    github: `https://github.com/JimmySting/best-of-music`,
    playlist: `https://open.spotify.com/embed/playlist/4yVv6CjVqDCdVjRswkbsTA`
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Best of Music 2020`,
        short_name: `Best Of`,
        start_url: `/`,
        background_color: `#fcfbf9`,
        theme_color: `#d19003`,
        display: `standalone`,
        icon: 'static/images/favicon.png',
      },
    },
    `gatsby-plugin-offline`,
  ],
};
