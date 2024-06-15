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
					<b>Senior Policy Advisor</b> for the Government of Canada.
					</p>
				</div>

				<div className="column">
					<h5>LANGUAGES</h5>
					<p>
					Korean, English.
					</p>
                </div>
            </div>

			<div className="columns">
                <div className="column">

				<h5>EDUCATION</h5>

				<p>
				<b>M.I. (Master of Information)</b>
				<br/>
				Information Systems Design.
				<br/>
				User Experience Design.
				</p>

				<br/>

				<p>
				<b>B.A. (Bachelor of Arts)</b>
				<br/>
				Anthropology, History, Minor in Linguistics.
				</p>

				</div>

				<div className="column">
					<h5>SPECIALTIES</h5>

					<p>
					<b>Artificial Intelligence in Public Policy</b>
					<br/>
					Ethical AI regulation and governance.
					</p>

					<br/>

					<p>
					<b>Human-Centered Design</b>
					<br/>
					Proficiency in designing policy-to-services that prioritize user needs.
					</p>

					<br/>

					<p>
					<b>Digital Transformation</b>
					<br/>
					Leading transformation initiatives to modernize government services.
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
					Leveraging 8+ years of practice since my <b>Master of Information (M.I.)</b>, I research, analyze, design, and solve complex data and design challenges. My <b>Bachelor of Arts (B.A.)</b> provided a solid liberal arts foundation.
					</p>

										
					<p>
					User Experience Design
					<br/>
					Data and Information Management
					</p>

					<p>
					As a <b>Senior Policy Advisor</b> for the Government of Canada, I work on initiatives to ensure our policies prioritize the needs of Canadians and those who rely on our services. 
					</p>

					
					<h5>LINKS</h5>
					
					<p>CV/Resume ↳</p>
					<p>How I Approach Work ↳</p>
					<p>UX in Gov</p>

					<h5>OUTRO</h5>
					
					<p>
					I like to design good services for Canadians and beyond. 
					I hope to represent Canada and foster international relationships 
					that prioritize the well-being of people.
					</p>

					
				*/

				>

					<h5>LINK</h5>

					<p>
					<a href="https://judepark.com/archive" rel="noreferrer noopener"><b style={{ color: 'hsla(0, 0%, 0%, 0.80)' }}>More</b></a> about me.
					</p>
					
                </div>



				
            </div>

		</Layout>
	);
}