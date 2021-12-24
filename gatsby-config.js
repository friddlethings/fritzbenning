require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `UX & Tollerei – Blog & Portfolio von Fritz Benning`,
        short_name: `UX & Tollerei`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#044fd1`,
        display: `minimal-ui`,
        icon: `src/images/ux-tollerei-icon.svg`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
