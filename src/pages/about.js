import * as React from 'react';

import '../styles/global.css';
import * as style from '../styles/home.module.css';

import Layout from '../components/Layout';

export default function About({ data }) {
	console.log(data);

	return (
		<Layout>
			<section className={style.header}>
				<div>
					<h1>About</h1>
					<div><hr/></div>
					<p className={style.header}>
					Me.
					</p>
				</div>
			</section>

			<div className="columns">
                <div className="column">
					<h5>INTRO</h5>
					<p>
					I work on digital governments.
					</p>
				</div>

				<div className="column">
					<h5>LANGUAGES</h5>
					<p>
					Korean, English
					</p>
                </div>
            </div>

			<div className="columns">
                <div className="column">
					<h5>WORK</h5>
					<p>
					As a <b>Senior Policy Advisor</b> for the Government of Canada, I shape digital experiences with human-centered approaches to government services. To ensure our policies prioritize every Canadian and beyond. 
					</p>
				</div>

				<div className="column">
					<h5>EDUCATION</h5>
					<p>
					Leveraging 8+ years of practice since my <b>Master of Information (M.I.)</b>, I research, analyze, design, and solve complex data and design challenges. My <b>Bachelor of Arts (B.A.)</b> provided a solid liberal arts foundation.
					</p>
				</div>
            </div>

			<div className="columns">
				<div className="column"
				
				/* Add when you have a link for:
					<p>Public Policy's Role in Artificial Intelligence</p>
					<p>Human-Centered Policy-to-Service Delivery in Digital Government</p>
					<p>UX in Gov</p>
					<p>Fair Design - What is Fair Access?</p>

										
					<p>
					User Experience Design
					<br/>
					Data and Information Management
					</p>
				*/

				>
					<h5>SPECIALTIES</h5>

                </div>

				<div className="column"  

				/* Add when you have a link for:
					<p>
					CV/Resume ↳
					<br/>
					How I Approach Work ↳
					</p>
				*/

				>
					<h5>DOWNLOAD</h5>

                </div>
            </div>

		</Layout>
	);
}