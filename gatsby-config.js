/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
	plugins: [
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				icon: `static/favicon.svg`,
			},
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				// Add your gatsby-remark-* plugins here
				plugins: [`gatsby-remark-prismjs`],
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `work`,
				path: `${__dirname}/src/work/`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
			  name: `essay`,
			  path: `${__dirname}/src/essay/`, 
			},
		  },
	],
	siteMetadata: {
		title: "Jude's website",
		description: 'personal site',
		author: 'Jude Park',
	},
	trailingSlash: 'never',
};
