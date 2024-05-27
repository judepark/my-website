import React from 'react';
import Layout from '../components/Layout';

import { graphql } from 'gatsby';

import 'prismjs/themes/prism-tomorrow.css';
import * as style from './essay-detail.module.css';

export default function essayDetails({ data }) {
	const { html, frontmatter } = data.markdownRemark;

	const techStack = frontmatter.stack.split(',');

	return (
		<Layout>
			<section className={style.datestamp}>
			<h6>{frontmatter.date}</h6>
			<hr/>
			</section>
			
			<div className={style.essayDetail}>
				<section>
					<div>
						<h1 style={{fontWeight:'300'}}>{frontmatter.title}</h1>
						<div className={style.technologyStackContainer}>
							{techStack.map((tech) => {
								return (
									<span key={`stack-${tech}`} className="tag">
										{String(tech).trim()}
									</span>
								);
							})}
						</div>
					</div>
				</section>

				<section
					className={style.content}
					dangerouslySetInnerHTML={{ __html: html }}
				/>
			</div>
		</Layout>
	);
}

export const query = graphql`
	query essayPage($slug: String) {
		markdownRemark(frontmatter: { slug: { eq: $slug } }) {
			html
			frontmatter {
				title
				date
				slug
				stack
				description
				githubRepo
				type
			}
		}
	}
`;
