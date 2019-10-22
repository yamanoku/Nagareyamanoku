module.exports = {
  siteMetadata: {
    title: `Nagareyamanoku`,
    description: `yamanokuが参考にする流山市にまつわるまとめページ`,
    siteUrl: `https://nagareyama.yamanoku.net/`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Nagareyamanoku`,
        short_name: `Nagareyamanoku`,
        start_url: `/`,
        background_color: `#FFF`,
        theme_color: `#15202b`,
        icon: `src/img/icon.png`,
        display: `standalone`
      }
    }
  ]
};
