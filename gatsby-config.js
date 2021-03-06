module.exports = {
  siteMetadata: {
    title: "Светлана гид по Риге",
    author: "Светлана Дворникова",
    description: "Сертифицированный частный гид Светлана познакомит Вас с Ригой"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-53660474-1',
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
