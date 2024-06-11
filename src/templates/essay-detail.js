import React from 'react';
import Layout from '../components/Layout';

import { graphql } from 'gatsby';

import 'prismjs/themes/prism-tomorrow.css';
import * as style from './essay-detail.module.css';

export default function essayDetails({ data }) {
	const { html, frontmatter } = data.markdownRemark;

	const techStack = frontmatter.stack.split(',');

    // Function to modify HTML content to open links in new tab
    const modifyHtmlContent = (content) => {
        const modifiedContent = content.replace(/<a(.*?)>/g, '<a$1 target="_blank" rel="noopener noreferrer">');
        return modifiedContent;
    };

	return (
		<Layout>
			<section className={style.datestamp}>
			<p><h6>{frontmatter.date}</h6>
			<hr/></p>
			</section>
			
			<div className={style.essayDetail}>
				<section>
					<div>
						<h1 style={{fontWeight:'400'}}>{frontmatter.title}</h1>
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
