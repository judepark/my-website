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
					<h1>JUDE</h1>
					<div><hr/></div>
					<p className={style.header}>
					My archive.
					</p>
				</div>
			</section>

		</Layout>
	);
}