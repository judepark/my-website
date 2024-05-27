import * as React from 'react';

import '../styles/global.css';
import * as style from '../styles/home.module.css';

import Layout from '../components/Layout';

export default function NotFound() {
	return (
		<Layout>

			<section className={style.header}>
				<div>
					<h3>404 - Page not found.</h3>
					<p>Working on it.</p>
				</div>
				<div>
					<img
						src="/404-error.svg"
						alt="404 Error"
						style={{ maxWidth: '100%' }}
					/>
			</div>
			</section>


		</Layout>
	);
}
