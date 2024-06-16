import * as React from 'react';

import '../styles/global.css';
import * as style from '../styles/home.module.css';

import Layout from '../components/Layout';

export default function Jude({ data }) {
	console.log(data);

	return (
		<Layout>
			<section className={style.header}>
				<div>
					<h1>Jude</h1>
					<div><hr/></div>
					<p className={style.header}>
					test.
					</p>
				</div>
			</section>

			<div
			
				/* Add when you have a link for:

					<div className="columns">
						<div className="column">
							<h5>MUSIC</h5>
							<p>

							<a
								href="https://www.youtube.com/watch?v=r-GFDofTBG4"
								rel="noreferrer noopener"
								target="_blank"
							>
							<b>푹</b> - 헨

							</a>
							</p>
						</div>

					</div>

					
				*/
			
			></div>


		</Layout>
	);
}