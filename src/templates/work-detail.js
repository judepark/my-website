import React from 'react';
import Layout from '../components/Layout';

import { graphql } from 'gatsby';

import 'prismjs/themes/prism-tomorrow.css';
import * as style from './work-detail.module.css';

export default function workDetails({ data }) {
	const { html, frontmatter } = data.markdownRemark;

	const techStack = frontmatter.stack.split(',');

    // Function to modify HTML content to open links in new tab
    const modifyHtmlContent = (content) => {
        const modifiedContent = content.replace(/<a(.*?)>/g, '<a$1 target="_blank" rel="noopener noreferrer">');
        return modifiedContent;
    };

	return (
		<Layout>
			<div className={style.workDetail}>
				<section>
					<div>
						<h2>{frontmatter.title}</h2>
						<p>{frontmatter.description}</p>
						<p><div className={style.technologyStackContainer}>
							{techStack.map((tech) => {
								return (
									<span key={`stack-${tech}`} className="tag">
										{String(tech).trim()}
									</span>
								);
							})}
						</div></p>
					</div>

				</section>

				<section
					className={style.content}
					dangerouslySetInnerHTML={{ __html: modifyHtmlContent(html) }}
				/>
			</div>
		</Layout>
	);
}

export const query = graphql`
	query workPage($slug: String) {
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
