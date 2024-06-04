const path = require(`path`);

exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`);
};

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  // Delete the existing page
  deletePage(page);

  // Create a new page with the same path but point to the 404 page component
  createPage({
    ...page,
    path: page.path,
    component: path.resolve("./src/pages/404.js"),
    context: {
      ...page.context,
    },
  });
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


/*

Temporary Site Maintance



const path = require(`path`);

exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`);
};

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  // Delete the existing page
  deletePage(page);

  // Create a new page with the same path but point to the 404 page component
  createPage({
    ...page,
    path: page.path,
    component: path.resolve("./src/pages/404.js"),
    context: {
      ...page.context,
    },
  });
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




*/







/*

Original Code:



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




*/