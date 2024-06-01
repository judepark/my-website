import * as React from 'react';

import '../styles/global.css';
import * as style from '../styles/home.module.css';

import Layout from '../components/Layout';

import List from '../components/List';
import { graphql } from 'gatsby';

export default function Essay({ data }) {
    console.log(data);

    // Filter data based on the 'type' field
    const essay = data.allMarkdownRemark.nodes.filter(node => node.frontmatter.type === 'essay');

    return (
        <Layout>
            <section className={style.header}>
                <div>
                    <h1>Essays</h1>
                    <div><hr/></div>
                    <p className={style.header}>
                        Areas of interest.
                    </p>
                </div>
            </section>


			<section>
				<div className={style.homeHeading}>
				</div>
				<List listItems={essay} />
			</section>
        </Layout>
    );
}

export const getessay = graphql`
    query essayQuery {
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