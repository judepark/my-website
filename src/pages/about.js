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
					I work on digital initiatives for governments.
					</p>
				</div>

				<div className="column">
					<h5>LANGUAGES</h5>
					<p>
					Korean
					<br/>
					English
					</p>
                </div>
            </div>

			<div className="columns">
                <div className="column">
					<h5>WORK</h5>
					<p>
					<b>Senior Policy Advisor</b>
					<br/>
					Government of Canada
					</p>

					<p>
					User Experience Design
					<br/>
					Data and Information Management
					</p>
				</div>

				<div className="column">
					<h5>EDUCATION</h5>
		
					<p>
					<b>M.I. (Master of Information)</b>
					<br/>
					User Experience Design
					<br/>
					Information Systems Design
					<br/>
					</p>
					
					<p>
					<b>B.A. (Bachelor of Arts)</b>
					</p>
				</div>
            </div>

			<div className="columns">
				<div className="column"
				
				/* Add when you have a link for:
					<p>Public Policy's Role in Artificial Intelligence</p>
					<p>Human-Centered Policy-to-Service Delivery in Digital Government</p>
					<p>Fair Design - What is Fair Access?</p>
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