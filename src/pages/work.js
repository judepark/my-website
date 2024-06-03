import * as React from 'react';

import '../styles/global.css';
import * as style from '../styles/home.module.css';

import Layout from '../components/Layout';

import List from '../components/List';
import { graphql } from 'gatsby';

export default function Work({ data }) {
	console.log(data);

    // Filter data based on the 'type' field
    const work = data.allMarkdownRemark.nodes.filter(node => node.frontmatter.type === 'work' && !node.frontmatter.stack.includes('Jude'));

	return (
		<Layout>
			<section className={style.header}>
				<div>
					<h1>Work</h1>
					<div><hr/></div>
					<p className={style.header}>
					Things I worked on.
					</p>
				</div>
			</section>

			<section>
				<div className={style.homeHeading}>
				</div>
				<List listItems={work} />
			</section>

		</Layout>
	);
}

export const getwork = graphql`
	query worksQuery {
		allMarkdownRemark(
			filter: { frontmatter: { display: { eq: true } } }
			sort: { frontmatter: { date: DESC } }
		) {
			nodes {
				frontmatter {
					title
					date
					slug
					stack
					description
					githubRepo
					type
				}
				id
			}
		}
	}
`;
