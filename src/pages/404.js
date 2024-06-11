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
					
					<div style={{color:'hsla(0, 0%, 0%, 0.45)', fontSize: '0.7rem', textAlign: 'center'}}>
						Image by{' '}
						<a
							href="https://storyset.com/"
							target="_blank"
							rel="noreferrer noopener"
							style={{ color: 'hsla(0, 0%, 0%, 0.45)' }}
						>
							Storyset
						</a>
					</div>
					
			</div>
			</section>


		</Layout>
	);
}
