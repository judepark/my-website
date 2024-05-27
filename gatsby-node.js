const path = require(`path`);

exports.onPostBuild = ({ reporter }) => {
	reporter.info(`Your Gatsby site has been built!`);
};


exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;

	const { data } = await graphql(`
		query content {
			allMarkdownRemark(filter: { frontmatter: { display: { eq: true } } }) {
				nodes {
					frontmatter {
						title
						date
						slug
						stack
						description
						githubRepo
						display
						type 
					}
				}
			}
		}
	`);

	data.allMarkdownRemark.nodes.forEach((node) => {
		let templatePath;

		if (node.frontmatter.type === 'essay') {
			templatePath = './src/templates/essay-detail.js';
		} else if (node.frontmatter.type === 'work') {
			templatePath = './src/templates/work-detail.js';
		} else {
			// Default template if type is not specified or doesn't match 'essay' or 'work'
			templatePath = './src/templates/default-detail.js';
		}

		createPage({
			path: `${node.frontmatter.slug}`,
			component: path.resolve(templatePath),
			context: {
				slug: node.frontmatter.slug,
			},
		});
	});
};